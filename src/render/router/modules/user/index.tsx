import UserLayout from '@/components/layouts/UserLayout';
import { RouteObject } from 'react-router-dom';
import PersonalCenter from '@/pages/home/index';
import Editor from '@/pages/about/index';
import React from 'react';

const UserRouter: RouteObject = {
  path: '/user',
  element: <UserLayout />,
  children: [
    { path: '/user', element: <PersonalCenter /> },
    { path: '/user/editor', element: <Editor /> }
  ]
};

export default UserRouter;
