import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Focast from './pages/Focast';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

import Header from './layout/Header';



function main() {
    return (
        <div className="main">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/focast" component={Focast} />
                <Route exact path="/about" component={About} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default main
