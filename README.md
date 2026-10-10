# Gupta's Agency

A clean, responsive, and professional web presence for Gupta's Agency, built to showcase services, recent work, and facilitate client consultations.

## Features
- **Modern UI/UX:** Earthy, premium design emphasizing trustworthiness and clarity.
- **Service & Portfolio Showcases:** Easily manageable components for displaying services and past projects.
- **Responsive Layout:** fully optimized for mobile, tablet, and desktop viewing.
- **Forms & Integration:** Built-in contact and feedback forms.

## Technology Stack
- **Frontend Framework:** React 19
- **Routing & SSR:** TanStack Router & TanStack Start
- **Styling:** Tailwind CSS v4 & class-variance-authority
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives & Lucide icons
- **Build Tool:** Vite

## Prerequisites
- **Node.js**: v20 or later recommended.
- **npm**: v10 or later recommended. (Bun configuration is intentionally removed to maintain a single source of truth for dependencies using npm).

## Installation

```bash
# Clone the repository
git clone https://github.com/ramkolipakula/guptas-agency.git
cd guptas-agency

# Install dependencies
npm install
```

## Local Development

To start the local development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or another port if 8080 is in use).

## Linting and Testing

Run the linter to check for code quality and formatting issues:

```bash
npm run lint
npm run format
```

Run the automated test suite:

```bash
npm run test
```

## Production Build

To build the application for production (client and server assets):

```bash
npm run build
```

The production assets will be generated in the `dist/` directory. 
To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and global styles
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utilities and configuration
│   ├── routes/           # TanStack Router route definitions
│   ├── router.tsx        # Router configuration
│   ├── server.ts         # Server entry point wrapper
│   └── start.ts          # TanStack Start middleware setup
├── package.json
└── vite.config.ts        # Independent Vite configuration
```

## Environment Variables

Create a `.env` file in the root directory for local development secrets if needed. The `.env` file should never be committed to version control.

## Deployment

The project is built with standard Vite and TanStack Start conventions, making it compatible with Node.js servers or edge platforms. Review your hosting provider's documentation for deploying standard Node.js applications or Vite SSR outputs.

