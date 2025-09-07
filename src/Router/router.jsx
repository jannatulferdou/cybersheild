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
import BlogsArticles from '../pages/Blog/Blog';
import SafetyTools from '../pages/safety/SafetyTools';
import PlaybookPage from '../pages/safety/render';
import BlogList from '../pages/Blog/Blog';
import BlogDetails from '../pages/Blog/BlogDetails';

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
        },
        {
          path: '/blogs',
          Component: BlogList
        },
        {
          path:'/safe',
          Component:SafetyTools
        },
        {
          path:'/playbook',
          Component:PlaybookPage
        },
        {
          path:'/blog/:id',
          Component:BlogDetails
        }
    ]
    }
])
export default router;