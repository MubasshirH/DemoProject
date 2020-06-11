import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../screens/Auth/Login/login'
import Signup from '../screens/Auth/Signup/signup'
import Home from '../screens/Home/home'

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />
            <Route path="/home" component={Home} />

        </div>
    </Router>
);
export default Routes;