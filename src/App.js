import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useAuth } from './context/UserContext';
import Notes from './container/Notes/Notes';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Layout from './hoc/Layout';

import classes from './App.module.css';

function App() {
  const { currentUser } = useAuth();

  let routes = (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );

  if (currentUser) {
    routes = (
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Notes} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className={classes.Container}>
      <Layout>
        {routes}
      </Layout>
    </div>
    )
}

export default App;
