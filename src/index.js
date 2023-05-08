import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/ProfileClass';
import Shimmer from './components/Shimmer';


const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ayush Aggarwal",
    email: "ayushaggarwal9040@gmail.com"
  })
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile name={"Ayush"} />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>,
      }
    ]
  },  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


