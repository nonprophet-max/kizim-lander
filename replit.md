# Kizim AI - iGaming VIP Management Platform

## Overview

Kizim AI is a presentation website for an AI-powered VIP management platform targeting the iGaming industry. The application showcases a solution for managing high-value players through automated AI agents, addressing the industry-wide problem of inadequate VIP player coverage due to scaling limitations of human teams.

The website is structured as a multi-page application with dedicated pages for problem definition, solution approach, expected results, MVP features, and founding team information. It features a persistent header navigation and serves as a marketing and pitch deck website built with modern web technologies.

## Recent Changes (October 10, 2025)

- **Multi-page structure**: Converted from single-page to multi-page application with separate routes
- **Header navigation**: Added fixed header with navigation links to all main sections (text-only branding)
- **Hero messaging update**: Updated with structured layout:
  - Microchip K logo image centered at top with diffused edges (radial gradient mask)
  - Large "KIZIM AI" title in bold primary (mint) color
  - Main message formatted into 3 lines: "KIZIM is the 360 degree relationship" / "layer between players" / "and your platform."
  - "Let's build together." as bold CTA below
  - Key phrases ("360 degree relationship" and "Let's build together.") styled in primary mint color
  - Reduced text size for better readability (text-2xl/3xl for main message)
- **Header tagline**: Added "| Agentic Solutions for iGaming" next to logo with thin font weight
- **Layout component**: Implemented shared layout wrapper for consistent spacing across all routes
- **Color scheme update**: Updated to match PDF presentation with dark navy backgrounds, mint/turquoise accents, and periwinkle highlights
- **Page simplification**: 
  - Problem page simplified to single section (removed duplicate label)
  - Solution and Result pages combined into single "Solution" page
  - MVP page restructured as unified section with sub-sections (removed roadmap)
- **Interactive Solution page**: Implemented tabbed interface for Solution and Result content
  - Two clickable tabs: "// the solution //" and "// the result //"
  - Active tab styling: bg-primary/20 background, text-primary color, border-b-2 border-primary
  - React useState manages tab state with smooth fade-in transitions
  - Each tab maintains SectionLabel for visual consistency
- **Responsive margins**: Implemented responsive padding system for optimal viewing across devices:
  - Mobile: px-6 (24px / 0.25 inches)
  - Tablet: px-12 (48px / 0.5 inches)
  - Desktop: px-48 (192px / 2 inches)
- **Enhanced readability**: Added leading-relaxed to all body text for improved line spacing
- **Section indentation**: Implemented ml-8 indentation for all sub-sections and content blocks for clear visual hierarchy
- **Hero gradient update**: Updated home page background to match provided design with organic mesh gradient (blue, cyan, magenta, purple on black base)
- **Logo imagery removed**: Eliminated all microchip logo imagery from site (header and decorative pins) due to upload issues
- **Mobile responsive design**: Implemented full mobile-friendly experience for iPhone and small screens
  - Hamburger menu navigation with slide-in drawer for mobile devices
  - Responsive typography scaling across all breakpoints (mobile → tablet → desktop)
  - Touch-friendly interactive elements (44px minimum touch targets)
  - Header text sizes: text-sm/text-base on mobile → text-2xl on desktop
  - Hero scaling: Logo 192px mobile → 320px desktop; Title text-4xl → text-7xl
  - Solution tabs: text-sm mobile → text-lg desktop with proper touch targets
  - Auto-closing mobile menu after navigation
  - Mobile menu background: Solid bg-background for better readability (no transparency)
- **MVP data table responsive redesign**: Fixed broken table layout on mobile devices
  - Mobile: Flex-wrapped badge/chip layout for all 24 data points
  - Desktop: Maintains original 6-column grid structure
  - Proper spacing and readability on all screen sizes
  - Preserved original test IDs for compatibility

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (instead of React Router)
- **TanStack Query v5** for server state management and data fetching

**UI Component System:**
- **Shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Material Design-inspired** design system optimized for content-first presentation
- Responsive layouts with mobile-first approach

**Design Patterns:**
- Component-based architecture with reusable UI components
- Page-level components for route handling
- Shared layout components (Header, Layout) used across all pages
- Fixed header navigation with active route highlighting
- Layout component provides consistent spacing for all routes
- CSS custom properties for theming (dark theme by default)
- Test identifiers (`data-testid`) on all major elements for testing

### Backend Architecture

**Server Framework:**
- **Express.js** with TypeScript for the Node.js backend
- **HTTP server** created using Node's native `http` module
- Middleware-based request/response handling with JSON support
- Custom logging middleware for API route monitoring

**Development Tools:**
- **Vite middleware mode** for development with HMR support
- **TSX** for running TypeScript in development
- **esbuild** for production bundling

**Storage Layer:**
- **In-memory storage** implementation (`MemStorage` class)
- Abstracted storage interface (`IStorage`) for future database integration
- Currently implements basic user CRUD operations
- UUID-based ID generation for entities

### Data Storage Solutions

**Current Implementation:**
- In-memory Map-based storage for development/demo purposes
- User schema defined with Drizzle ORM types

**Database Preparation:**
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** adapter included (@neondatabase/serverless)
- Database migrations configured in `drizzle.config.ts`
- Schema defined in `shared/schema.ts` with Zod validation
- Ready for PostgreSQL provisioning (currently using memory storage)

**Schema Design:**
- Users table with username/password authentication
- UUID primary keys with PostgreSQL's `gen_random_uuid()`
- Zod schemas for validation using drizzle-zod integration

### Design System

**Typography:**
- Google Fonts: Inter family for all text (headings and body)
- Hierarchical text sizing: 6xl/8xl hero, 4xl/5xl pages, 2xl/3xl sections

**Color Palette (Matching PDF Presentation):**
- Custom HSL color system with CSS variables
- Primary (Mint/Turquoise): 165 65% 65% - Used for accents, links, and highlights
- Secondary (Periwinkle): 225 60% 75% - Used for headings and emphasis
- Background: Dark navy (210 50% 10%) - Main background color
- Foreground: Near white (0 0% 98%) - Primary text color
- Gradient backgrounds for hero sections (blue → cyan → purple spectrum)
- Section labels use the distinctive `// label //` format in mint color

**Spacing & Layout:**
- Tailwind spacing units (2, 4, 8, 12, 16)
- Container-based max-width layouts (max-w-6xl)
- Custom border radius values (9px, 6px, 3px)
- Elevation system using rgba overlays for hover/active states

### External Dependencies

**UI & Interaction Libraries:**
- **Radix UI**: Comprehensive primitive component library for accessible UI elements
  - Accordion, Dialog, Dropdown, Popover, Toast, Tooltip, and 20+ other components
  - Used as foundation for Shadcn/ui components
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette interface components
- **Lucide React**: Icon library
- **class-variance-authority (CVA)**: Type-safe component variants
- **Tailwind CSS Merge & CLSX**: Class name utilities

**Form Handling:**
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **Zod**: Schema validation

**State & Data:**
- **TanStack Query**: Server state management with caching
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Drizzle Zod**: Schema-to-Zod validation conversion

**Database & Backend:**
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store (prepared for authentication)
- **Express**: Web server framework
- **Wouter**: Lightweight routing library

**Utilities:**
- **date-fns**: Date manipulation
- **nanoid**: Unique ID generation
- **Replit Plugins**: Development tools (error overlay, cartographer, dev banner)

**Development Tools:**
- **TypeScript**: Type safety across full stack
- **Vite**: Build tool and dev server
- **PostCSS & Autoprefixer**: CSS processing
- **esbuild**: Production bundling

### Authentication & Security

**Prepared Infrastructure:**
- PostgreSQL session store ready via connect-pg-simple
- User schema with password field (hashing not yet implemented)
- Storage interface includes user lookup methods
- Session management dependencies installed but not configured

**Current State:**
- No active authentication implemented
- Routes are publicly accessible
- Foundation laid for future user management

### Routing Structure

**Client-Side Routes:**
- `/` - Home page with hero section and byline (4 value propositions)
- `/problem` - Problem statement: VIP coverage gap and scaling challenges (single unified section)
- `/solution` - Interactive tabbed page with "the solution" and "the result" content (tab-based switching)
- `/mvp` - MVP features as unified section: Dashboard, recommendation engine, compliance (roadmap removed)
- `/team` - Founding team: Luke Skyrme, Miheer Walavalkar, Max Rabinovitch
- `*` - 404 Not Found page

**Navigation:**
- Fixed header with logo (links to home) and navigation menu
- Active route highlighting in header navigation
- All pages use shared Layout component for consistent spacing
- Responsive horizontal margins: px-6 (mobile), px-12 (tablet), px-48 (desktop)

**API Routes:**
- Prefix: `/api` (configured but no routes implemented)
- Logging middleware tracks API requests with duration and response

### Build & Deployment

**Development:**
- `npm run dev`: Runs development server with TSX
- Vite dev server with HMR on port 5000 (default)
- Express API on same port with Vite middleware

**Production:**
- `npm run build`: Builds client (Vite) and bundles server (esbuild)
- Client output: `dist/public`
- Server output: `dist/index.js`
- `npm start`: Runs production build with Node.js

**Database:**
- `npm run db:push`: Pushes Drizzle schema to database
- Migration files output to `./migrations`