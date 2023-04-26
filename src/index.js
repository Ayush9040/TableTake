import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/ProfileClass';

//Assignment 1
// const h1 = React.createElement("h1", {}, "Namaste React");

// const h2 = React.createElement("h2", {}, "Hi");

// const container = React.createElement("div", {}, [h1,h2]);

//Assignment 3

// const header = React.createElement("div",{id: "title"}, [React.createElement("h1", {}, "first"),React.createElement("h2",{},"second"), React.createElement("h3",{},"third")]);


const AppLayout = () => {
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
        element: <About />,
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
      }
    ]
  },  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


