# Bilklubben Podcast - Modern Web Platform

Professional automotive podcast platform built with modern web technologies.

## 🚀 Stack

- **Frontend**: Next.js 14+ (React, TypeScript)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: npm/yarn/pnpm
- **Development**: ESLint, Prettier, TypeScript

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory (pages & layouts)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── podcast/            # Podcast pages
│   ├── shows/              # Shows pages
│   ├── cars/               # Car rankings pages
│   └── questions/          # Question form pages
├── components/
│   ├── layout/             # Layout components (Header, Footer, etc)
│   ├── ui/                 # Reusable UI components (Button, Card, etc)
│   ├── podcast/            # Podcast-specific components
│   ├── shows/              # Shows-specific components
│   ├── cars/               # Car-specific components
│   └── forms/              # Form components
├── types/                  # TypeScript type definitions
├── constants/              # App constants
├── data/                   # Static/mock data & data utilities
├── services/               # API services & data fetching
├── hooks/                  # Custom React hooks
├── utils/                  # Utility functions
└── lib/                    # Library functions & helpers
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Create .env.local from .env.example
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build & Production

```bash
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎯 Features

### ✅ Implemented
- Professional header with responsive navigation
- Footer with links and branding
- Global styling system (Tailwind CSS)
- Type-safe data models
- Mock data for development

### 📋 Planned
- Homepage with hero section & featured content
- Podcast episodes listing & streaming platform links
- Live shows & ticket integration
- Car of the Week ranking leaderboard
- Excel data import for car reviews
- Question/forum section
- Mobile responsive design
- SEO optimization

## 🗂️ Data Models

### Podcast Episode
- Title, description, episode number
- Published date, duration
- Streaming platform links (Spotify, Apple, YouTube, etc)
- Cover image & featured flag

### Live Show
- Title, description, date & time
- Location, venue, city
- Ticket status & Ticketmaster link
- Image

### Car Review
- Model, brand, year
- Scoring categories (design, performance, comfort, technology, value)
- Ranking position & total score
- Reviewers & notes

### Question
- Name/alias, email (optional)
- Category (cars, buying, technical, car-of-week, podcast, other)
- Content & submission date
- Status (pending, answered, featured)

## 🔧 Configuration

### Environment Variables

Create `.env.local` based on `.env.example`:

```
NEXT_PUBLIC_APP_NAME=Bilklubben Podcast
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All components tested on mobile, tablet, desktop

## 🎨 Design System

**Colors**:
- Primary: Deep black (#1a1a1a)
- Secondary: Dynamic red (#dc2626)
- Accent: Gold (#fbbf24)

**Typography**: System fonts with fallbacks

**Spacing**: Tailwind default scale

## 🚀 Performance

- Image optimization via Next.js Image component
- Code splitting & lazy loading ready
- SSR/SSG for SEO
- Minimal JavaScript bundle

## 📦 Data Management

### Current
- Mock/static data in `src/data/`
- Type-safe data utilities

### Future
- Excel import for car reviews
- CMS/API integration
- Database support
- Real-time data updates

## ✨ Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Prettier for formatting
- Semantic HTML
- Accessibility-first approach

## 📝 Notes

- Follow existing component patterns
- Reuse components from `src/components/ui/`
- Keep components focused & single-responsibility
- Use TypeScript for new files
- Import from absolute paths: `@/components`, `@/types`, etc

## 📚 Next Steps

1. Complete homepage design & implementation
2. Build podcast section
3. Implement live shows section
4. Create car ranking system
5. Add Excel data import
6. Implement question form & handling
7. Deploy & optimize

---

Made with ❤️ for Bilklubben Podcast
