# Foogle

Foogle is a lightweight React search interface for exploring popular frontend libraries and frameworks. It provides a simple search page, live suggestions, search results, recent-search history, and basic navigation between application views.

Search requests are sent through the Vite development-server proxy to the Serper search API. The project also includes a local list of frontend technologies used to power search suggestions.

## Features

- Search for frontend libraries and frameworks.
- Display live suggestions while entering a query.
- Fetch and display organic search results.
- Show loading, empty-result, and error states.
- Save recent searches in browser `localStorage`.
- View recent searches from the search page or the History route.
- Navigate between Home, Results, History, and About pages.
- Use a fallback 404 page for unknown routes.

## Tech stack

- React 19
- React Router
- Vite
- Tailwind CSS 4
- Iconify icons
- Serper search API

## Requirements

- Node.js 18 or newer
- npm
- A Serper API key with access to the search API

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown by Vite in your browser.

The Vite proxy maps `/api-search` to the Serper `/search` endpoint during development, so the browser can use the application route without calling the external endpoint directly.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Application routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with the Foogle search form and suggestions. |
| `/results` | Displays results returned by the search request. |
| `/history` | Displays all saved searches. |
| `/about` | Basic application information. |
| Any other route | Displays the 404 page. |

## Project structure

```text
my-react-app/
├── public/                 # Static assets
├── src/
│   ├── About.jsx           # About page
│   ├── App.jsx             # Router and search provider setup
│   ├── Header.jsx          # Shared navigation header
│   ├── History.jsx         # Search history page
│   ├── Home.jsx            # Home page composition
│   ├── NotFound.jsx        # 404 page
│   ├── ResultPage.jsx      # Search results page
│   ├── SEARCH_DATABASE.jsx # Built-in suggestion/search data
│   ├── Search.jsx          # Search form and suggestions
│   ├── SearchContext.jsx   # Shared search state and API requests
│   ├── index.css           # Tailwind and Iconify imports
│   └── main.jsx            # Application entry point
├── index.html
├── vite.config.js
└── package.json
```

## Search history

Search history is stored in the browser under the `History` `localStorage` key. It is local to the browser and is not persisted to a server.

## Production notes

The included proxy is configured in `vite.config.js` for local development. For a production deployment, configure the hosting environment or backend to proxy search requests securely and keep API credentials out of client-side code.
