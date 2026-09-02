import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./Home.jsx";
import ResultPage from "./ResultPage.jsx";
import { SearchProvider } from "./SearchContext";
import About from "./About.jsx";
import NotFound from "./NotFound.jsx";
import History from './History.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/results',
    element: <ResultPage/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
  {
    path:'/history',
    element: <History/>
  }

])

function App() {
  return (
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  );
}

export default App


