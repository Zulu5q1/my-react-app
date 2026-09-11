# Foogle

A polished React search experience designed for discovering frontend tools, libraries, and development resources with speed and clarity.

Foogle is a front-end application that combines a lightweight search UI with real-time recommendations, persistent search history, and curated results from the Serper Search API. The project demonstrates a clear, modern frontend architecture using React, React Router, and Tailwind CSS while focusing on responsive design and clean user interaction.

## Why this project

This project was built to showcase a practical, user-focused product experience: a search engine interface that feels intuitive, fast, and visually polished. It highlights the ability to:

- Design a clean, mobile-friendly search workflow
- Connect a frontend app to an external search API
- Manage shared application state with React Context
- Build multi-page navigation in a lightweight SPA
- Persist user behavior with browser storage
- Deliver a recruiter-friendly product demo with professional polish

## Key features

- Search bar with instant suggestions for frontend frameworks and libraries
- Dynamic result cards rendered from live API responses
- Loading, empty-state, and error-handling UX
- Recent searches saved in browser local storage
- Search history dropdown and dedicated history view
- Responsive layout optimized for desktop and mobile devices
- Multi-page navigation using React Router
- Trending content section built from prior search activity
- Custom 404 fallback page for unmatched routes

## Tech stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- JavaScript (ES modules)
- Serper Search API
- Iconify icons

## Application overview

Foogle is structured as a single-page application with a search-focused landing experience. Users can type a query, receive suggestions, trigger a search, and view structured results. The app persists the search history locally and makes it easy to revisit prior queries without backend infrastructure.

## Project structure

```text
my-react-app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── About.jsx
│   ├── App.jsx
│   ├── Header.jsx
│   ├── History.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Profile.jsx
│   ├── ResultPage.jsx
│   ├── SEARCH_DATABASE.jsx
│   ├── Search.jsx
│   ├── SearchContext.jsx
│   ├── Trending.jsx
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
├── dist/
└── README.md
```

## Core functionality

### Search workflow

Users enter a term into the search input. The app validates the query, updates search state, and sends the request through a Vite proxy to the Serper Search API. Results are then mapped into visually consistent result cards.

### Search history

The application stores user searches in browser localStorage so that recent queries remain available across reloads. This provides a practical example of lightweight persistence without requiring a database or API backend.

### Navigation and UX

The app includes a route-based experience using React Router:

- `/` — home/search landing page
- `/results` — result display page
- `/history` — previously searched terms
- `/about` — project and product overview
- `/profile` — profile page
- `*` — custom 404 page

## Local setup

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The production bundle is generated in the `dist/` directory.

## Scripts

```bash
npm run dev      # start Vite development server
npm run build    # create production build
npm run preview  # preview production build locally
npm run lint     # run ESLint checks
```

## API integration

The project uses Serper Search API for live search results. In development, Vite proxies `/api-search` requests to the Serper `/search` endpoint via `vite.config.js`, reducing CORS friction and keeping the client-side integration simple.

## Notes for recruiters

Foogle demonstrates:

- Frontend product thinking with a focused user journey
- Real-world API integration patterns
- Strong UI/UX instincts using Tailwind CSS
- Experience with React state management and navigation
- Ability to build a complete small-scale search product from concept to interface

## Future enhancements

Potential next steps for this project include:

- Advanced search filters and sorting
- Result pagination and infinite scroll
- Dark mode and theming
- Image/video search capabilities
- Server-side API protection for production deployments
- Improved accessibility auditing and keyboard navigation

## Journey

Foogle wasn't built in a weekend. It was built over 40 days while I documented my progress, solved real bugs, and learned React by shipping features one at a time.

## License

This project is for demonstration and portfolio purposes.
