import React from 'react';
import { Switch, Router } from 'react-router';
import routes from './routes';
import { createBrowserHistory } from 'history';

const App: React.FC = () => (
  <Router history={createBrowserHistory()}>
    <Switch>{routes}</Switch>
  </Router>
);

export default App;
