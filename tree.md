

###  **Project Overview 

```
.
├── docker-compose.yml         # Multi-container Docker setup (frontend + other services)
├── Dockerfile                 # Docker image build instructions for the frontend
├── package.json               # Project metadata, scripts, and dependencies
├── yarn.lock                  # Yarn lockfile for version consistency
├── tsconfig.json              # TypeScript compiler configuration
├── next.config.mjs            # Next.js configuration (env, rewrites, webpack tweaks)
├── postcss.config.mjs         # PostCSS setup (used by Tailwind)
├── tailwind.config.mjs        # TailwindCSS theme and plugin configuration
├── eslint.config.mjs          # ESLint configuration (code linting rules)
│
├── public/                    # Static assets (served as-is)
│   ├── imgs/                  # Images for login/signup and UI
│   ├── logo.svg               # Main project logo
│   ├── icon.svg, globe.svg    # Misc icons
│   └── ...                    # Other static SVG/PNG files
│
├── src/                       # Main application source code
│   ├── app/                   # Next.js App Router structure
│   │   ├── (auth)/            # Auth-related routes (login, signup, admin)
│   │   │   ├── login/         # Login page
│   │   │   ├── sign-up/       # Registration page
│   │   │   └── admin/         # Admin dashboard section (with subroutes)
│   │   ├── (public)/          # Public routes (accessible without auth)
│   │   │   ├── booking/       # Booking flow pages
│   │   │   ├── freelance/     # Freelance form and candidate management
│   │   │   └── profile/       # User profile page
│   │   ├── layout.tsx         # Root layout for all routes
│   │   └── ReactQueryProvider # Global React Query setup
│
│   ├── api/                   # API layer (Axios + endpoint management)
│   │   ├── api.ts             # API endpoint definitions
│   │   ├── axiosClient.ts     # Axios instance + interceptors
│   │   └── index.ts           # Central export file
│
│   ├── assets/                # Static code-related assets
│   │   ├── style/
│   │   │   ├── globals.css    # Global CSS styles
│   │   │   └── tiptap.css     # Styles for TipTap editor
│
│   ├── components/            # Reusable UI and functional components
│   │   ├── ui/                # Core UI elements (button, input, dialog, etc.)
│   │   ├── form/              # Modular form components (React Hook Form)
│   │   ├── layout/            # App layouts (admin, default, sidebar, navbar)
│   │   ├── card/              # Card-style UI components (documents, members, etc.)
│   │   ├── tiptap/            # TipTap editor extensions and toolbar
│   │   ├── loading/           # Loading & error state components
│   │   ├── design/            # Decorative / styled components (Header, Pagination)
│   │   └── wrappers/          # Section wrappers and layout helpers
│
│   ├── configs/               # Global configuration (e.g. React Query settings)
│   ├── constant/              # App constants (static info, env metadata)
│   ├── hooks/                 # Custom React hooks (auth, project, media-query)
│   ├── lib/                   # Utility libraries (routes, content, response mapping)
│   ├── middleware/            # Middleware functions (e.g. auth, redirects)
│   ├── store/                 # Global state management (Zustand stores)
│   ├── types/                 # TypeScript types and interfaces
│   └── utils/                 # General utilities (validators, formatters, helpers)
│
└── README.md                  # Main project documentation
```

---

###  **Quick Understanding**

* **`app/`** → The main routing layer (Next.js App Router).
* **`components/`** → Modular, reusable UI and form logic.
* **`api/`** → Communication layer with the backend (Axios setup).
* **`store/`** → Client-side state management with Zustand.
* **`utils/` & `hooks/`** → Helper logic and reusable hooks.
* **`configs/`** → Centralized configuration for tools or libraries.
* **`Dockerfile` & `docker-compose.yml`** → Containerization setup for deployment.

