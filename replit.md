# SHK Software Vergleich

## Overview

SHK Software Vergleich is a German B2B comparison platform for software solutions in the SHK sector (Sanitär, Heizung, Klima - Plumbing, Heating, Air Conditioning). The application provides comprehensive comparisons, feature overviews, pricing information, and educational content to help tradespeople and small businesses select appropriate software solutions for their operations.

The platform focuses on delivering professional, trustworthy content with clear information hierarchy, following German web conventions and DSGVO (GDPR) compliance requirements. It serves multiple user intents: informational (understanding features), comparative (choosing between solutions), transactional (requesting demos), and problem-solving (implementation guidance).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for lightweight, declarative routing without requiring a server-side framework. Routes are defined in `App.tsx` with a simple `<Switch>/<Route>` pattern.

**UI Component Library**: shadcn/ui components based on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling. Components follow the "New York" style variant with custom theming.

**Styling Approach**: Tailwind CSS with a custom design system defined in `tailwind.config.ts`. The design uses CSS variables for theming (supporting light/dark modes) and follows German B2B design standards with professional credibility, clear information hierarchy, and scannable content.

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. Local component state is managed with React hooks.

**Form Handling**: React Hook Form with Zod for validation (evident from `@hookform/resolvers` dependency).

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API pattern with routes prefixed under `/api`. The application uses a custom routing system defined in `server/routes.ts` with middleware for request/response logging.

**Development Server**: Custom Vite middleware integration for HMR (Hot Module Reload) in development, serving the React application and providing seamless full-stack development experience.

**Storage Layer**: In-memory storage implementation (`MemStorage`) implementing an `IStorage` interface, designed to be easily swappable with a database-backed implementation. The interface defines CRUD operations for users and can be extended for additional entities.

**Session Management**: Express sessions with PostgreSQL session store (`connect-pg-simple`) configured for production use.

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript (`shared/schema.ts`).

**Schema Strategy**: Shared schema between frontend and backend via the `shared/` directory, enabling type-safe data access across the stack. Uses Drizzle-Zod for automatic Zod schema generation from database schemas.

**Current Implementation**: The application currently uses in-memory storage for development but is structured to use PostgreSQL via Drizzle ORM. The database configuration expects a `DATABASE_URL` environment variable pointing to a Neon (serverless PostgreSQL) instance.

**Content Storage**: Static content topics and FAQ data are defined as TypeScript constants in the schema file, suggesting a content-first approach where editorial content is version-controlled rather than database-stored.

### Authentication and Authorization

**Current State**: Basic user schema exists with username/password fields, but no active authentication middleware is implemented in the routes. The storage interface includes user lookup methods (`getUser`, `getUserByUsername`, `createUser`).

**Session Storage**: PostgreSQL-backed sessions are configured, indicating preparation for authenticated user sessions.

**Design Pattern**: The application is structured to add authentication incrementally, with the storage interface and session management infrastructure in place.

### Build and Deployment

**Build Process**: 
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM
- Database: Drizzle Kit for schema migrations to `migrations/` directory

**Development**: Single command (`npm run dev`) runs both Vite dev server and Express backend with TypeScript execution via `tsx`.

**Production**: Compiled assets served from Express with static file serving for the built React application.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, etc.)
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality

### Database and ORM

- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema-first approach
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database platform
- **Drizzle Kit**: CLI tool for database migrations and schema management
- **Drizzle-Zod**: Automatic Zod schema generation from Drizzle schemas

### State Management and Data Fetching

- **TanStack Query (React Query)**: Async state management for server data with caching, background updates, and optimistic updates
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for forms and API data

### Styling and UI Utilities

- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styles for components
- **clsx & tailwind-merge**: Conditional class name utilities
- **PostCSS & Autoprefixer**: CSS processing

### Development Tools

- **Vite**: Fast build tool and dev server with HMR
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for Node.js
- **TypeScript**: Type safety across full stack

### Replit-Specific Integrations

- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation
- **@replit/vite-plugin-dev-banner**: Development environment indicator

### Utility Libraries

- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing library

### Design Assets

The application uses generated images stored in `attached_assets/generated_images/` for feature illustrations and category icons, providing visual consistency with cloud, mobile, integration, time tracking, and maintenance themes.