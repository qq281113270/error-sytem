import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LogIn = lazy(() => import('../pages/LogIn'));
const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('./routes/About'));

const Routers = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/log-in" component={LogIn}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Suspense>
  </Router>
);

export default  Routers