import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { About, Articles, Home } from './pages/index.js'
import App from './App.jsx'

const router = createBrowserRouter([
 { path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/articles',
      element: <Articles />,
    },
  ],}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
