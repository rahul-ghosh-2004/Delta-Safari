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
import { Provider } from 'react-redux'
import hotelInfoStore from './app/stores/hotelInfo'
import Activities from './pages/Activity/Activities'
import ActivityOverview from './pages/ActivityOverview/ActivityOverview'
import ActivityReview from './pages/ActivityReview/ActivityReview'
import CorporatePackages from './pages/CorporatePackages/CorporatePackages'
import PackageDetails from './pages/PackageDetails/PackageDetails'


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
      },
      {
        path: "/activity",
        element: <Activities />
      },
      {
        path: "/activities/:city",
        element: <ActivityOverview />
      },
      {
        path: "/activities/:city/:slug",
        element: <ActivityReview />
      },
      {
        path: "/corporatepackages",
        element: <CorporatePackages />
      },
      {
        path: "/corporatepackages/:slug",
        element: <PackageDetails />
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
    <Provider store={hotelInfoStore}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
