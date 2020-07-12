import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';



function main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default main