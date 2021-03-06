import React, { Component } from "react";
import Login from './pages/Login';
import Register from './pages/Register';
import Matches from './pages/Matches';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class App extends Component {

    render() {
        return (
            <div id="root">
                <Router>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/matches" component={Matches}/>
                    <Route path="/admin" component={Admin}/>
                </Router>
            </div>
        );
    }
}
