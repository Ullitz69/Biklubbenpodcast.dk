/**
 * DEVELOPMENT WORKFLOW
 */

# Development Workflow

## Starting Development

### 1. Install Dependencies (First Time)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Server runs at `http://localhost:3000`

### 3. Development Loop
- Edit files in `src/`
- Browser auto-refreshes
- Check console for TypeScript errors
- Check terminal for lint warnings

## Common Tasks

### Adding a New Page
```bash
# Create in src/app/[section]/page.tsx
# Example: src/app/about/page.tsx
```

Then add to navigation in `src/constants/navigation.ts`

### Adding a New Component
```
# Generic UI components
src/components/ui/MyComponent.tsx

# Feature-specific components
src/components/[feature]/MyComponent.tsx

# Then export from index.ts
```

### Adding New Types
```bash
# Update or add to src/types/index.ts
# TypeScript will enforce usage
```

### Styling
- Use Tailwind CSS utility classes
- Add reusable patterns to `src/app/globals.css` in @layer components
- Never add custom CSS unless absolutely necessary

### Adding Data
- Add to appropriate file in `src/data/`
- Keep data separate from components
- Data files export functions, not just constants

## Quality Checks

### Before Committing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

### Running All Checks
```bash
npm run typecheck && npm run lint && npm run format:check && npm run build
```

If all pass, code is ready to commit.

## Debugging

### TypeScript Errors
- Hover over red squiggles in VS Code
- Check terminal: `npm run typecheck`
- Fix types or adjust code accordingly

### Runtime Errors
- Check browser console (F12)
- Check terminal output
- Use `console.log()` for debugging
- React DevTools browser extension helps

### Styling Issues
- Inspect element (F12)
- Check if Tailwind classes are applied
- Verify breakpoints in `tailwind.config.js`
- Check global styles in `src/app/globals.css`

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes
# Run quality checks
npm run typecheck && npm run lint && npm run format

# Commit
git add .
git commit -m "feat: descriptive message"

# Push
git push origin feature/feature-name

# Create Pull Request
```

## Performance Tips

- Avoid prop drilling - use composition or context
- Use `useMemo()` for expensive calculations
- Lazy load heavy components with `dynamic()`
- Optimize images with Next.js Image component
- Monitor bundle size with `npm run build`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change with `npm run dev -- -p 3001` |
| Module not found | Check import paths use `@/` prefix |
| Styles not applied | Ensure Tailwind config includes file pattern |
| TypeScript errors | Run `npm run typecheck` to see all errors |
| Slow build | Clear `.next` folder: `rm -rf .next` |

---

Happy coding! 🚀
