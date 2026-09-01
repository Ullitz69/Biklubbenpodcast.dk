/**
 * DATA IMPORT & MIGRATION GUIDE
 * 
 * This document explains how to import data, especially from Excel files.
 */

# Data Import Guide - Bilklubben Podcast

## Overview

The project uses a data-driven architecture where all content (podcasts, shows, car reviews, questions) flows through centralized data files. This makes it easy to migrate from mock data to APIs, databases, or CMS.

## Current Data Sources

### Static Data Files
Located in `src/data/`:
- `podcasts.ts` - Podcast episodes
- `shows.ts` - Live shows
- `cars.ts` - Car reviews & rankings

**Current Status**: Mock/static data for development

## Importing Car Data from Excel

The Car of the Week data currently lives in an Excel file. Here's how to import it:

### Step 1: Analyze Excel Structure
The Excel file should have columns like:
- Car Brand/Model
- Year
- Scoring categories (Design, Performance, Comfort, Technology, Value)
- Total Score (or calculate it)
- Reviewer names
- Notes/comments

### Step 2: Create Import Script

**File**: `scripts/import-cars-from-excel.js`

```javascript
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read Excel file
const workbook = XLSX.readFile('data/car-reviews.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet);

// Transform to our format
const cars = data.map((row, index) => ({
  id: String(index + 1),
  brand: row.Brand || '',
  model: row.Model || '',
  year: row.Year ? parseInt(row.Year) : new Date().getFullYear(),
  scores: {
    design: parseFloat(row.Design) || 0,
    performance: parseFloat(row.Performance) || 0,
    comfort: parseFloat(row.Comfort) || 0,
    technology: parseFloat(row.Technology) || 0,
    value: parseFloat(row.Value) || 0,
    total: parseFloat(row.Total) || 0,
  },
  ranking: parseInt(row.Ranking) || index + 1,
  reviewedDate: row.Date || new Date().toISOString(),
  reviewers: row.Reviewers ? row.Reviewers.split(',') : [],
  notes: row.Notes || '',
}));

// Calculate total score if not provided
cars.forEach(car => {
  if (!car.scores.total || car.scores.total === 0) {
    car.scores.total = Object.keys(car.scores)
      .filter(k => k !== 'total')
      .reduce((sum, k) => sum + (car.scores[k] || 0), 0);
  }
});

// Sort by ranking
cars.sort((a, b) => a.ranking - b.ranking);

// Write to TypeScript file
const output = `import { CarReview } from '@/types';

export const carReviews: CarReview[] = ${JSON.stringify(cars, null, 2)};

// ... rest of cars.ts content
`;

fs.writeFileSync(path.join(__dirname, '../src/data/cars.ts'), output);
console.log(`Imported ${cars.length} cars`);
```

### Step 3: Install Dependencies

```bash
npm install --save-dev xlsx
```

### Step 4: Run Import Script

```bash
node scripts/import-cars-from-excel.js
```

### Step 5: Verify Data

Check `src/data/cars.ts` to ensure data is correctly imported.

## Importing Podcast Episodes & Shows

### For Podcasts
Episodes can come from:
1. **Spotify API** - Fetch episodes from Spotify API
2. **RSS Feed** - Parse podcast RSS feed
3. **Manual Entry** - Handcrafted in `src/data/podcasts.ts`

### For Shows
Shows can come from:
1. **Ticketmaster API** - Fetch events and ticket info
2. **Manual Entry** - Add to `src/data/shows.ts`
3. **Calendar Integration** - Google Calendar, etc.

## Transition to API/Database

When you're ready to use real data sources:

### Step 1: Create Service Layer

**File**: `src/services/carService.ts`

```typescript
import { CarReview } from '@/types';

export const carService = {
  async getReviews(): Promise<CarReview[]> {
    // Replace with actual API call
    const response = await fetch('/api/cars');
    return response.json();
  },
  
  async getReviewById(id: string): Promise<CarReview | null> {
    const response = await fetch(`/api/cars/${id}`);
    if (!response.ok) return null;
    return response.json();
  }
};
```

### Step 2: Update Components

Components don't need to change - they already expect typed data.

### Step 3: Create API Routes

**File**: `src/app/api/cars/route.ts`

```typescript
export async function GET() {
  // Fetch from database or CMS
  const cars = await getCarsFromDatabase();
  return Response.json(cars);
}
```

## Data Validation

When importing data, ensure:
- All required fields are present
- Scores are within valid range (0-10)
- Dates are valid ISO format
- IDs are unique

Use `src/utils/validation.ts` for validation helpers.

## Excel File Format Reference

### Recommended Columns for Car Reviews

| Brand | Model | Year | Design | Performance | Comfort | Technology | Value | Ranking | Date | Reviewers | Notes |
|-------|-------|------|--------|-------------|---------|-----------|-------|---------|------|-----------|-------|
| Ferrari | F8 Tributo | 2024 | 9.5 | 9.8 | 8.2 | 8.9 | 7.5 | 1 | 2024-01-15 | Host A, Host B | Italian masterpiece |

---

**Note**: Data imported once the Excel file is provided. Reach out with the file location for automatic import setup.
