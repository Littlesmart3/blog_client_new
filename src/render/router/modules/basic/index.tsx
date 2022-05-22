import BasicLayout from '@/components/layouts/BasicLayout';
import { RouteObject } from 'react-router-dom';
import Home from '@/pages/home/index';
import About from '@/pages/about/index';
import React from 'react';

const BasicRouter: RouteObject = {
  path: '/',
  element: <BasicLayout />,
  children: [
    { path: '', element: <Home /> },
    { path: 'about', element: <About /> }
  ]
};

export default BasicRouter;
