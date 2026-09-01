/**
 * ARCHITECTURE DECISIONS
 * 
 * This document explains key architectural decisions and why they were made.
 */

# Architectural Decisions for Bilklubben Podcast

## 1. Full-Stack Framework: Next.js 14+

### Decision
Use Next.js as the primary framework for both frontend and backend.

### Rationale
- **SSR/SSG Support**: Better SEO (critical for podcast discovery)
- **API Routes**: Backend API endpoints without separate server
- **Image Optimization**: Built-in image optimization for performance
- **Developer Experience**: Single language (TypeScript/JavaScript)
- **Deployment**: Streamlined deployment to vercel or traditional servers
- **Performance**: Automatic code splitting, incremental static regeneration

## 2. TypeScript for Type Safety

### Decision
Use TypeScript throughout the project.

### Rationale
- Catches type errors at compile time
- Improves IDE support and autocompletion
- Self-documenting code through types
- Makes refactoring safer
- Aligns with modern React best practices

## 3. Tailwind CSS for Styling

### Decision
Use Tailwind CSS for all styling.

### Rationale
- Utility-first approach reduces CSS file size
- Consistent design system through tokens
- Responsive design built-in with breakpoints
- No CSS-in-JS complexity
- Already used in modern React projects (familiar pattern)
- Smaller bundle size than component libraries

## 4. React Hook Form + Zod for Forms

### Decision
Use React Hook Form for state management and Zod for validation.

### Rationale
- React Hook Form: Minimal re-renders, great performance, small bundle
- Zod: Runtime validation, TypeScript-first, composable schemas
- No external component dependencies
- Covers all form needs: validation, submission, error handling

## 5. Static Data Structure with Easy Migration Path

### Decision
Start with static/mock data in `src/data/` that can easily migrate to API/database.

### Rationale
- Fast development without backend setup
- Clear data models (types) from the start
- Easy transition to API: just replace data functions with fetch calls
- Components don't need to know data source
- Excel import can write to same data structures

## 6. Component Organization by Feature + UI Separation

### Decision
Separate generic UI components from feature-specific components.

### Rationale
- **UI Components** (`src/components/ui/`): Reusable (Button, Card, Container)
- **Feature Components** (`src/components/podcast/`, `src/components/cars/`, etc): Domain-specific
- **Layout Components**: Global layout (Header, Footer, RootLayout)
- Reduces component complexity
- Makes components easier to test
- Clear ownership and responsibility

## 7. Centralized Constants & Configuration

### Decision
Keep application constants in dedicated files.

### Rationale
- Single source of truth for business logic
- Easy to update without searching codebase
- Supports i18n/l10n later
- Clear configuration surface

## 8. Utilities Over Helpers

### Decision
Use focused utility modules (`validation.ts`, `format.ts`) rather than monolithic helpers.

### Rationale
- Easier to import and maintain
- Clear responsibility per module
- Better tree-shaking
- Easier to test individual utilities

## 9. No Authentication Yet

### Decision
Build without authentication/admin system initially.

### Rationale
- Podcast, shows, and car rankings are public data
- Question form doesn't require login
- Complex auth adds development time
- Can be added later without major refactoring
- Focus on core features first

## 10. Excel Data Import Strategy

### Decision
Pre-process Excel data at build time (or via CLI script) rather than client-side.

### Rationale
- Reduces browser JavaScript size
- No large Excel parser shipped to users
- Server-side processing is more reliable
- Can be automated as part of deployment

---

## Future Considerations

### If API Integration Needed
1. Create service layer in `src/services/`
2. Replace data functions with API calls
3. Components don't need to change
4. Add error boundaries for failed requests

### If CMS Integration Needed
1. Fetch data from CMS API instead of static files
2. Add caching/ISR (Incremental Static Regeneration)
3. Same component structure works

### If Database Needed
1. Set up database + ORM (Prisma, Drizzle, etc)
2. Create API routes that talk to database
3. Same as above - components don't change

---

Made with intention for scalability and maintainability.
