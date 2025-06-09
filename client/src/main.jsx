import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Auth from './components/Auth/Auth'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

    ]
  },
  {
    path: "/auth",
    element: <Auth />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
