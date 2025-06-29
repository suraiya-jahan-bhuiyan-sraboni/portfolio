import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      }
    ]
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
