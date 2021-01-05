import React, { useState } from 'react';
import { } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

// Firebase
import firebase from 'firebase/app';
import "firebase/auth";

//Components

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from './Context/UserContext';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
