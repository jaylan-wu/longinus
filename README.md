# Longinus

Longinus is Jaylan Wu's personal portfolio: an interactive, cinematic interface built around the visual motif of the Spear of Longinus. The project combines editorial typography, responsive interface design, restrained motion, and real-time 3D.

The current implementation includes the homepage navigation scene, the Projects archive and detail flow, a procedural spear model, a no-WebGL fallback, and an About page.

## Stack

- **React 19** for the interface and component architecture
- **TypeScript** with strict type checking
- **Vite 8** for local development and production builds
- **Three.js** for real-time 3D rendering
- **React Three Fiber** for composing the Three.js scene in React
- **Drei** for React Three Fiber utilities
- **GSAP** for planned interaction and transition work
- **CSS** for the design system, responsive layouts, and interface motion
- **ESLint** with React Hooks and TypeScript rules
- **Yarn Classic** for dependency management

The repository also includes React Three Postprocessing and Rapier for later visual and interaction work. They are not required by every current page.

## Requirements

- A current Node.js release compatible with Vite 8; Node.js 22 LTS is recommended
- Yarn 1.x
- A browser with JavaScript enabled

WebGL improves the homepage presentation but is not required. A CSS spear silhouette remains visible when the 3D scene cannot initialize.

## Getting started

Install dependencies:

```bash
yarn install
```

Start the local development server:

```bash
yarn dev
```

Vite will print the local URL in the terminal, typically `http://localhost:5173`.

## CLI commands

### Development

```bash
yarn dev
```

Starts the Vite development server with hot module replacement.

### Type checking

```bash
yarn typecheck
```

Runs TypeScript without emitting files and reports type errors.

### Linting

```bash
yarn lint
```

Checks the repository with ESLint, including TypeScript and React Hooks rules.

### Production build

```bash
yarn build
```

Creates an optimized production build in `dist/`. The build also validates that Vite can compile the application successfully.

### Preview the production build

```bash
yarn preview
```

Serves the contents of `dist/` locally. Run `yarn build` first.

### Recommended validation sequence

Before committing a change, run:

```bash
yarn typecheck
yarn lint
yarn build
```

## Project structure

```text
src/
├── components/
│   ├── spear/       # Shared spear geometry and restrained DOM fallback
│   └── three/       # Shared Three.js infrastructure
├── features/
│   ├── about/       # About page and editable About content
│   ├── home/        # Homepage interface, navigation, and page-owned spear scene
│   └── projects/    # Project data, archive/detail views, and project-owned spear behavior
├── hooks/           # Shared React hooks
├── styles/          # Cross-system design values used outside CSS
├── types/           # Shared TypeScript types
├── App.tsx          # Lightweight page selection
├── index.css        # Global tokens, reset, and application-wide behavior
└── main.tsx         # React application entry point
```

Navigation currently uses URL hashes. `#home` displays the homepage, `#projects` opens the project archive, `#projects/:slug` opens a project record, and `#about` displays the About page. Music and Playground remain planned destinations and are presented as unavailable until their designs are implemented.

## Design and accessibility

The interface uses the palette defined in `AGENTS.md` and keeps DOM content separate from the React Three Fiber scene. Navigation is keyboard accessible, focus styles are visible, and motion is reduced when the browser reports `prefers-reduced-motion: reduce`.

Approved Figma exports, design-foundation notes, and motion specifications are documented in [`design/figma/README.md`](design/figma/README.md).

No external 3D model is currently used. The spear is assembled from procedural Three.js geometry and backed by a styled CSS fallback.
