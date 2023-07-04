import React from 'react'
import Navber from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Marquee from "./Components/Marquee";
import "./App.css"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import ProductPage from './Components/Product/ProductPage';

const Layout = () => {
  return (
    <div>
      <Marquee />
      <Navber />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/producrpage",
        element: <ProductPage />
      },
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App