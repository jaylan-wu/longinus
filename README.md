# Longinus

Longinus is Jaylan Wu's interactive personal portfolio. Its structured DOM interface and recurring 3D Spear of Longinus connect software engineering, game-development interests, and technical education through deliberate typography, motion, and real-time graphics.

The repository is an active work in progress. Current code provides a homepage,
a staged Projects archive and metadata-only detail flow, and a five-chapter
About experience. Music, Playground, the boot sequence, the final spear asset,
and supplied references for authored motion are planned but unavailable.

## Current status

| Experience | Route | Status |
| --- | --- | --- |
| Home | empty hash, `#home`, or any unrecognized hash | **Partially implemented.** The desktop-first DOM composition and a procedural React Three Fiber spear are present. Available navigation uses direct hash links; the coordinated homepage focus, commitment, impact, and route-transition model is not implemented. |
| Projects archive | `#projects` | **Staged.** Three provisional records, pointer/keyboard focus, two-tap touch selection, a procedural spear response, reduced-motion timing, and a timed archive-to-detail transition are implemented. No approved Projects Figma frame or final motion reference is stored in the repository. |
| Project detail | `#projects/<slug>` | **Staged.** Valid records show summary metadata and technologies; unknown slugs show an in-app not-found state. Narrative sections and demonstration regions are not implemented. |
| About | `#about` | **Partially implemented.** Five scrollable chapters, local record selection, seven photographs, four mixed-media influence records, and a sticky page-owned spear scene are present. The approved Identity desktop-idle composition is implemented and browser-compared. Its procedural continuous rotation was inspected, but no authored Blender motion reference exists; the other chapter compositions and some official wording remain unresolved. |
| Music | none | **Planned.** The homepage control is disabled and no Music feature exists. |
| Playground | none | **Planned.** The homepage control is disabled and no Playground feature exists. |
| Boot experience | n/a | **Planned.** There is no critical-asset readiness or boot transition implementation. |

Two `1440 × 900` desktop-idle references are stored. The Homepage frame remains
in progress without a recorded browser comparison; the About Identity frame is
implemented and browser-compared. See [`TASKS.md`](TASKS.md) for detailed live
status and validation history.

## Technology

Current runtime code uses:

- React 19 and React DOM;
- TypeScript with strict, no-emit checking;
- Vite 8;
- Three.js and React Three Fiber;
- CSS for tokens, feature-owned composition, responsive rules, and DOM motion; and
- local React state and feature hooks rather than a router or global state library.

`@react-three/drei`, `@react-three/postprocessing`, `@react-three/rapier`, and `gsap` are installed but are not imported by current source code. Framer Motion / Motion is not installed. Do not describe these packages as implemented capabilities until code uses them.

## Requirements and package manager

- Node.js `^20.19.0` or `>=22.12.0`, matching Vite 8's engine requirement
- Corepack with Yarn `4.17.1`, pinned by `packageManager` in `package.json`
- A browser with JavaScript enabled

The repository uses Yarn `4.17.1`, a modern Yarn lockfile, `.yarnrc.yml`, and the `node-modules` linker. Do not run Yarn Classic 1.x against this lockfile. Use `corepack yarn` so Corepack resolves the repository-pinned release even when an older global `yarn` binary appears earlier on the shell path.

Enable Corepack and install without rewriting the lockfile:

```bash
corepack enable
corepack yarn install --immutable
```

Then start the development server:

```bash
corepack yarn dev
```

Vite prints the local URL, normally `http://localhost:5173`.

## Available commands

All commands below are defined in `package.json`.

| Command | Purpose |
| --- | --- |
| `corepack yarn dev` | Start the Vite development server with hot-module replacement. |
| `corepack yarn typecheck` | Run `tsc --noEmit`. |
| `corepack yarn lint` | Run ESLint over the repository; `dist` is ignored by the ESLint configuration. |
| `corepack yarn build` | Create the production bundle in the ignored `dist/` directory. |
| `corepack yarn preview` | Serve an existing production bundle locally; run the build first. |

There is no test, Markdown-lint, formatter, or deployment script/configuration in the repository. Do not document or invoke a test command as though one exists.

For current source changes, the available automated validation sequence is:

```bash
corepack yarn typecheck
corepack yarn lint
corepack yarn build
```

The first Corepack invocation may need network access to download Yarn `4.17.1`. Subsequent commands use Corepack's cached copy. The globally available Yarn 1.x binary is not compatible with this repository's lockfile format for dependency installation.

## Routes and loading

`src/App.tsx` implements a small hash router without React Router:

- the empty hash, `#home`, and unknown hashes resolve to Home;
- `#projects` resolves to the archive;
- `#projects/<encoded-slug>` resolves to a project detail or its not-found state; and
- `#about` resolves to About.

About, Projects, and project-detail modules are lazy-loaded with `React.lazy`. Home and its React Three Fiber dependencies are part of the initial application path. Route changes update the document title and scroll to the top; explicit focus transfer after navigation is not implemented.

## Repository structure

```text
.
├── content/
│   └── ABOUT_CONTENT.md        # Editorial source, draft notes, and verification flags
├── design/figma/
│   ├── README.md               # Figma handoff and approved-frame tracker
│   ├── foundations.md          # Current design foundations and unresolved decisions
│   ├── motion/                 # Planned navigation and project-transition specifications
│   └── references/             # Design-review exports; never runtime page images
├── public/                     # Site favicon
├── src/
│   ├── components/
│   │   ├── spear/              # Shared procedural SpearModel and Home/Projects CSS silhouette
│   │   └── three/              # SceneErrorBoundary
│   ├── features/
│   │   ├── about/              # About chapters, data, assets, active chapter, scene, and CSS
│   │   ├── home/               # Homepage DOM composition, navigation data, scene, and CSS
│   │   └── projects/           # Project data, archive/detail UI, transition state, scene, and CSS
│   ├── hooks/                  # Shared reduced-motion media-query hook
│   ├── styles/                 # Color values used by Three.js scenes
│   ├── types/                  # Shared navigation and personal-axis types
│   ├── App.tsx                 # Hash-route parsing and route-level lazy imports
│   ├── index.css               # Global tokens, reset, shared page index, reduced-motion baseline
│   └── main.tsx                # React entry point
├── AGENTS.md                   # Product direction plus current engineering constraints
├── TASKS.md                    # Verified implementation status and recommended work order
├── package.json
└── yarn.lock
```

Feature-specific layout, interaction CSS, data, and scene behavior stay inside the owning feature. The shared spear code is only the procedural base geometry and Home/Projects DOM silhouette; camera, lighting, staging, and animation remain page-owned.

## Current implementation notes

- There are no GLTF or GLB files. `SpearModel.tsx` builds temporary primitive
  geometry in code.
- No font files are bundled by design. The system-font tokens in `src/index.css`
  are the runtime font-family source of truth.
- Responsive and fallback behavior exists in source, but detailed validation,
  asset limitations, performance findings, and remaining work are tracked in
  [`TASKS.md`](TASKS.md).

## Design and documentation sources

- [`AGENTS.md`](AGENTS.md) defines durable product direction, source-of-truth
  boundaries, interaction principles, and engineering constraints.
- [`content/ABOUT_CONTENT.md`](content/ABOUT_CONTENT.md) owns About editorial
  copy, record details, and verification flags.
- [`TASKS.md`](TASKS.md) is the detailed implementation-status and validation
  authority.
- [`design/figma/README.md`](design/figma/README.md) owns the Figma handoff and
  approved-frame tracker.
- [`design/figma/foundations.md`](design/figma/foundations.md) records audited
  visual values and open design decisions.
- [`design/figma/motion/`](design/figma/motion/) contains transition-specific
  sequences, provisional timings, and unresolved motion decisions.

## Fan Work and Intellectual Property Notice

Longinus is an independent fan-made portfolio project inspired by the visual direction, typography, atmosphere, and themes of *Neon Genesis Evangelion*. It is not an official Evangelion project and is not affiliated with, endorsed by, or sponsored by the series' creators, studios, publishers, or other rights holders.

*Neon Genesis Evangelion*, the Spear of Longinus, and all related names, characters, designs, trademarks, and intellectual property belong to their respective rights holders. Any references within this project are included as creative influences and expressions of appreciation. No ownership of the original series or its intellectual property is claimed, and no infringement is intended.

Longinus aims to develop an original visual and interactive identity rather than reproduce official artwork, characters, logos, footage, interface layouts, or other protected materials.
