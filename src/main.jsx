import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/BasicRoutes.jsx';

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App>l</App>,
  //   },
  // ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
