/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Navigate, useRoutes } from 'react-router-dom';

import { RouteObject } from '@/routers/interface';
import Login from '@/views/login/index';

// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true });

// * 处理路由
const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: unknown) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
];

const Router = () => {
  // @ts-ignore
  const routes = useRoutes(rootRouter);
  console.log({ routes });

  return routes;
};

export default Router;
