import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '',
    component: NotFound,
  },
];

export default routes.map((prop, index) => <Route key={index} {...prop} />);
