# Pichcom Prints & Graphics Website

## Overview

This is a modern full-stack web application for Pichcom Prints & Graphics, a professional printing and graphics company based in Kenya. The application serves as a business website showcasing their services, portfolio, and enabling customer contact. It's built with a React frontend and Express backend, designed for deployment on Replit's autoscale platform.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production Build**: ESBuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### 1. Frontend Components
- **Landing Page**: Single-page application with multiple sections
- **Navigation**: Fixed navbar with smooth scrolling to sections
- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Services Section**: Grid layout showcasing different printing services
- **About Section**: Company information and statistics
- **Reviews Section**: Customer testimonials with rating display
- **Contact Section**: Contact form with service selection
- **Footer**: Company information and quick links

### 2. Backend Services
- **Express Server**: RESTful API server with middleware setup
- **Storage Layer**: Modular storage interface supporting CRUD operations
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware

### 3. Shared Resources
- **Database Schema**: User management schema with Zod validation
- **Type Definitions**: Shared TypeScript interfaces between client and server

## Data Flow

1. **Static Content**: All business information is currently hardcoded in React components
2. **Contact Forms**: Client-side form validation with React Hook Form and Zod schemas
3. **API Communication**: TanStack Query handles server communication with proper error handling
4. **Database Operations**: Drizzle ORM provides type-safe database interactions
5. **Session Management**: Configured for PostgreSQL session storage (connect-pg-simple)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **wouter**: Lightweight React router
- **drizzle-orm**: Type-safe ORM
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production server bundling

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Development Server**: Vite dev server with HMR
- **Port Configuration**: Application runs on port 5000

### Production Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend files
4. **Database Migration**: Drizzle migrations applied via `db:push`

### Deployment Configuration
- **Target**: Replit autoscale deployment
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **External Port**: 80 (maps to internal port 5000)

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 17, 2025. Initial setup