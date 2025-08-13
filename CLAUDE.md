# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Build for production to the `build` folder
- `npm run build:docs` - Build for GitHub Pages deployment to `./docs` folder
- `npm test` - Run tests in interactive watch mode

### Testing
- Run all tests: `npm test`
- Run specific test file: `npm test -- App.test.tsx`
- Run tests with coverage: `npm test -- --coverage`

## Architecture Overview

### Technology Stack
- **React 19** with TypeScript for the frontend
- **React Router v7** for routing and navigation
- **Tailwind CSS** for styling
- **D3.js** for data visualizations and graphs
- **React Syntax Highlighter** for code display
- **Create React App** as the build toolchain

### Application Structure

The application is a demo platform for Breeze.AI's portfolio rationalization and technical debt assessment tools, organized around three main features:

1. **Core Technology** - Overview of the four-ontology framework (Functional, Design, Architecture, Code)
2. **Portfolio Rationalization** - Tools for analyzing and comparing software products
3. **Technical Debt Assessment** - Agent-based analysis and remediation planning

### Key Architectural Components

#### Context Providers (`src/contexts/`)
- **OntologyContext**: Manages ontology data and product selection state
- **DemoContext**: Handles demo mode and data switching between Phoenix and Apollo products
- **NavigationContext**: Controls sidebar navigation state

#### Data Layer (`src/data/`, `src/lib/`)
- **FourOntologyGraph**: Core library for creating and analyzing software products using the four-ontology framework
- **FourOntologyBuilder**: Builder pattern implementation for constructing ontology graphs
- **FourOntologyAnalyzer**: Analysis algorithms for overlap detection and pattern recognition
- Separate data modules for Phoenix and Apollo product ontologies

#### Routing Structure
The app uses nested routing with a main layout wrapper:
- Landing page at `/` (no sidebar)
- Main sections with sidebar: `/core-technology`, `/solutions`, `/portfolio/*`, `/technical-debt/*`
- Legacy route redirects maintained for backward compatibility

#### Component Organization (`src/components/`)
- **layout/**: Main application layout with sidebar
- **common/**: Reusable components (headers, filters, metrics cards)
- **portfolio/**: Portfolio rationalization features
- **technicalDebt/**: Technical debt assessment features
- **charts/**: D3-based visualization components
- **diagrams/**: SVG-based process diagrams

### Deployment
- Configured for GitHub Pages deployment at https://accionlabs.github.io/breeze-in-action
- Uses `PUBLIC_URL` environment variable for proper routing in subdirectory deployment
- Build output goes to `docs/` folder for GitHub Pages compatibility

### Key Files for Configuration
- `src/config/ontologyConfig.json` - Ontology structure definitions
- `src/config/rationalizationConfig.ts` - Rationalization analysis parameters
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler configuration