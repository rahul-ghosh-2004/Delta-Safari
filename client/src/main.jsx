import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Auth from './components/Auth/Auth'
import Home from './pages/Home/Home'
import Hotels from './pages/Hotels/Hotels'
import HotelOverview from './pages/HotelOverview/HotelOverview'
import HotelReview from './pages/HotelReview/HotelReview'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/hotels",
        element: <Hotels />
      },
      {
        path: "/hotel-overview",
        element: <HotelOverview />
      },
       {
        path: "/hotel-review", // 
        element: <HotelReview />
      }
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
