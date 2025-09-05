import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Features from '../pages/Features/Features';
import About from '../pages/About';
import Contact from '../pages/Contact/Contact';
import Report from '../pages/Report/Report';

const router = createBrowserRouter([
    {
        path: "/",
      errorElement:<ErrorPage></ErrorPage>,   
    Component:Root,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
            
        },
        {
          path: '/features',
          Component: Features
        },
        {
          path: '/about',
          Component: About
        },
        {
          path:'/contact',
          Component: Contact
        },
        {
          path:'/report',
          Component: Report
        }
    ]
    }
])
export default router;