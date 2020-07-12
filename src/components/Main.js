import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Finder from './pages/Finder';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';

import DateTime from './DateTime';


const  main = () => {
    return (
        <div className="main">
            <DateTime />
            <Header />
            <Content>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/finder" component={Finder} />
                    <Route exact path="/about" component={About} />
                    <Route component={ErrorPage} />
                </Switch>
            </Content>
            <Footer />
        </div>
    )
}

export default main
