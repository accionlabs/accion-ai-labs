# Next.js Migration Plan for Accion AI Labs

## Executive Summary
This document outlines a comprehensive plan to migrate the Accion AI Labs application from Create React App (CRA) to Next.js for improved SEO compatibility and performance.

## Current State Analysis

### Technology Stack
- **Frontend**: React 19 with TypeScript
- **Routing**: React Router v7 (client-side)
- **Styling**: Tailwind CSS
- **Data Visualizations**: D3.js
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages (static hosting)

### Application Structure
- **Single Page Application (SPA)** with client-side routing
- **Static data** stored in TypeScript files (no external API calls)
- **Three main sections**: Core Technology, Portfolio Rationalization, Technical Debt Assessment
- **Complex nested routing** with over 50+ routes

### SEO Limitations
1. **No server-side rendering** - Content not visible to search engines on initial load
2. **Client-side routing** - Poor crawlability for nested pages
3. **No meta tag management** - Limited control over page-specific SEO metadata
4. **Static deployment** - No dynamic content generation

## Migration Strategy

### Phase 1: Setup and Infrastructure (Week 1)

#### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest accion-ai-labs-nextjs --typescript --tailwind --app
```

#### 1.2 Dependency Migration
- Install core dependencies from current package.json
- Add Next.js specific packages:
  - `next-seo` for SEO management
  - `@next/bundle-analyzer` for optimization
  - Keep existing: d3, lucide-react, react-syntax-highlighter

#### 1.3 Project Structure Setup
```
accion-ai-labs-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── core-technology/         # Core tech routes
│   ├── portfolio/               # Portfolio routes
│   ├── technical-debt/          # Tech debt routes
│   └── solutions/               # Solutions routes
├── components/                   # Shared components
├── lib/                         # Utilities and data
├── public/                      # Static assets
└── styles/                      # Global styles
```

### Phase 2: Routing Migration (Week 2)

#### 2.1 Convert React Router to Next.js App Router

**Current React Router Structure:**
```typescript
<Route path="/core-technology" element={<SemanticEngineeringOverview />} />
<Route path="/portfolio/overview" element={<PortfolioOverview />} />
```

**Next.js App Router Structure:**
```typescript
// app/core-technology/page.tsx
export default function CoreTechnologyPage() {
  return <SemanticEngineeringOverview />
}

// app/portfolio/overview/page.tsx
export default function PortfolioOverviewPage() {
  return <PortfolioOverview />
}
```

#### 2.2 Layout Components
Convert AppLayout wrapper to Next.js layouts:
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  )
}

// app/(with-sidebar)/layout.tsx
export default function SidebarLayout({ children }) {
  return <AppLayout>{children}</AppLayout>
}
```

### Phase 3: SEO Implementation (Week 3)

#### 3.1 Static Generation for All Routes
```typescript
// app/portfolio/overview/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Rationalization - Breeze.AI',
  description: 'Analyze and optimize your software portfolio with AI-powered insights',
  keywords: 'portfolio rationalization, software analysis, technical debt',
}

export default function Page() {
  // Component implementation
}
```

#### 3.2 Dynamic Metadata Generation
```typescript
// app/solutions/[solution]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const solution = getSolutionData(params.solution)
  
  return {
    title: `${solution.title} - Breeze.AI Solutions`,
    description: solution.description,
    openGraph: {
      title: solution.title,
      description: solution.description,
      images: [solution.image],
    },
  }
}
```

#### 3.3 Sitemap Generation
```typescript
// app/sitemap.ts
export default function sitemap() {
  const routes = getAllRoutes()
  
  return routes.map(route => ({
    url: `https://accionlabs.github.io${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
```

### Phase 4: Data Layer Migration (Week 3)

#### 4.1 Convert Static Data to Server Components
```typescript
// Current (CRA)
import { ontologyData } from '../data/ontologyData'

// Next.js (Server Component)
// lib/data/ontology.ts
export async function getOntologyData() {
  // Can be extended to fetch from API/database later
  return ontologyData
}

// app/portfolio/page.tsx
export default async function Page() {
  const data = await getOntologyData()
  return <PortfolioView data={data} />
}
```

#### 4.2 Context Migration
- Convert contexts to Server Components where possible
- Use client components only for interactive features
- Implement proper data fetching patterns

### Phase 5: Performance Optimization (Week 4)

#### 5.1 Code Splitting
```typescript
// Dynamic imports for heavy components
const D3Chart = dynamic(() => import('@/components/charts/D3Chart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // D3 requires client-side rendering
})
```

#### 5.2 Image Optimization
```typescript
import Image from 'next/image'

// Convert all img tags to Next.js Image component
<Image
  src="/assets/breeze-logo.png"
  alt="Breeze.AI"
  width={200}
  height={50}
  priority
/>
```

#### 5.3 Font Optimization
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})
```

### Phase 6: Deployment Strategy (Week 4)

#### 6.1 Deployment Options

**Option A: Vercel (Recommended for SEO)**
- Full SSR/SSG support
- Automatic optimizations
- Edge functions for dynamic content
- Built-in analytics

**Option B: Static Export for GitHub Pages**
```typescript
// next.config.js
module.exports = {
  output: 'export',
  basePath: '/accion-ai-labs',
  images: {
    unoptimized: true, // Required for static export
  },
}
```

**Option C: Self-hosted with Node.js**
- Full Next.js features
- Custom server configuration
- Docker deployment option

## Implementation Timeline

### Week 1: Foundation
- [ ] Set up Next.js project
- [ ] Configure TypeScript and Tailwind
- [ ] Migrate basic components
- [ ] Set up development environment

### Week 2: Routing & Navigation
- [ ] Convert all routes to App Router
- [ ] Implement layouts
- [ ] Migrate navigation components
- [ ] Test routing functionality

### Week 3: SEO & Data
- [ ] Add metadata to all pages
- [ ] Implement sitemap and robots.txt
- [ ] Convert data fetching patterns
- [ ] Add structured data (JSON-LD)

### Week 4: Optimization & Deployment
- [ ] Optimize images and fonts
- [ ] Implement code splitting
- [ ] Performance testing
- [ ] Deploy to production

## Migration Checklist

### Pre-Migration
- [ ] Backup current application
- [ ] Document all routes and components
- [ ] Identify client-only dependencies
- [ ] Plan rollback strategy

### Components Migration
- [ ] Landing page
- [ ] Core Technology section (6 pages)
- [ ] Portfolio Rationalization (5 pages)
- [ ] Technical Debt Assessment (5 pages)
- [ ] Solutions showcase (15+ pages)
- [ ] Breeze Process Model (20+ pages)
- [ ] Common components (charts, diagrams, etc.)

### SEO Enhancements
- [ ] Page titles and descriptions
- [ ] Open Graph tags
- [ ] Twitter cards
- [ ] Canonical URLs
- [ ] Schema.org markup
- [ ] XML sitemap
- [ ] robots.txt

### Testing
- [ ] Unit tests migration
- [ ] Integration tests
- [ ] E2E tests with Playwright
- [ ] Lighthouse scores (target 90+ for SEO)
- [ ] Cross-browser testing

## Key Benefits After Migration

### SEO Improvements
1. **Server-side rendering** - Full content visible to search engines
2. **Static generation** - Pre-rendered pages for optimal performance
3. **Dynamic meta tags** - Page-specific SEO optimization
4. **Automatic sitemap** - Better crawlability
5. **Core Web Vitals** - Improved performance metrics

### Performance Benefits
1. **Automatic code splitting** - Smaller bundle sizes
2. **Image optimization** - Next.js Image component
3. **Font optimization** - Reduced layout shift
4. **API routes** - Backend functionality if needed
5. **Incremental Static Regeneration** - Update content without rebuild

### Developer Experience
1. **File-based routing** - Simpler route management
2. **Built-in TypeScript support** - Better type safety
3. **Fast Refresh** - Instant feedback during development
4. **API routes** - Full-stack capabilities
5. **Middleware** - Request/response interception

## Risk Mitigation

### Potential Challenges
1. **D3.js compatibility** - Requires client-side rendering
   - Solution: Use dynamic imports with ssr: false
   
2. **Complex routing structure** - Many nested routes
   - Solution: Systematic migration with route groups
   
3. **GitHub Pages limitations** - Static hosting only
   - Solution: Consider Vercel for full Next.js features
   
4. **Context/state management** - Client-side state
   - Solution: Hybrid approach with server/client components

## Recommended Tools

### Development
- **next-seo**: SEO management
- **@next/bundle-analyzer**: Bundle size analysis
- **playwright**: E2E testing
- **next-sitemap**: Sitemap generation

### Monitoring
- **Vercel Analytics**: Performance monitoring
- **Google Search Console**: SEO tracking
- **Lighthouse CI**: Automated performance testing

## Success Metrics

### SEO Metrics (Target)
- Lighthouse SEO score: 95+
- Core Web Vitals: All green
- Search engine indexation: 100% of pages
- Organic traffic: 50% increase in 3 months

### Performance Metrics (Target)
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1

## Conclusion

This migration plan provides a structured approach to converting the Accion AI Labs application from Create React App to Next.js. The phased approach ensures minimal disruption while maximizing SEO benefits and performance improvements.

The migration will transform the application from a client-side SPA to a hybrid SSR/SSG application with superior SEO capabilities, better performance, and improved developer experience.

## Next Steps
1. Review and approve the migration plan
2. Set up development environment
3. Begin Phase 1 implementation
4. Schedule weekly progress reviews

---

*Document prepared for: Accion AI Labs*  
*Date: December 2024*  
*Version: 1.0*