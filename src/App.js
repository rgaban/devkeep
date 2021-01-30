import React, { useState, useRef } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { useAuth } from './context/UserContext';
import Notes from './container/Notes/Notes';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Layout from './hoc/Layout';

import classes from './App.module.css';

function App() {
  const { currentUser, login, signup } = useAuth() || {};

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
        setError('');
        setIsLoading(true);
        await login(emailRef.current.value, passwordRef.current.value)
            .then(setIsLoading(false));
            history.push('/');
    } catch {
        setError('Failed to sign in');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match');
    };

    try {
        setError('');
        setIsLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value)
            .then(setIsLoading(false));
        history.push('/');
    } catch {
        setError('Failed to create an account');
    };
};

  let routes = (
    <Switch>
      <Route path="/signup" component={() =>
        <Signup
          onSubmit={handleSignUp}
          emailRef={emailRef}
          passwordRef={passwordRef}
          passwordConfirmRef={passwordConfirmRef}
          btnDisabled={isLoading}
          error={error} /> } />
      <Route path="/login" component={() =>
        <Login
          onSubmit={handleLogIn}
          emailRef={emailRef}
          passwordRef={passwordRef}
          isLoading={isLoading}
          error={error} />} />
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
  };

  return (
    <div className={classes.Container}>
      <Layout>
        {routes}
      </Layout>
    </div>
    )
}

export default App;
