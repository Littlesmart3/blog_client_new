import React from 'react';
import { BrowserRouter, HashRouter, useRoutes } from 'react-router-dom';
import LoginModule from '@/pages/login/index';
import NotFound from '@/pages/404';
import UserRouter from './modules/user';
import BasicRouter from './modules/basic';

const GetRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: '/login', element: <LoginModule /> }, // 登录组册模块
    BasicRouter, // 业务模块
    UserRouter, // 用户模块
    { path: '*', element: <NotFound /> } // 404
  ]);
  return routes;
};

const Router: React.FC = () => (
  <HashRouter>
    <GetRoutes />
  </HashRouter>
);
export default Router;
