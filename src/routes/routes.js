'use strict';

var React = require('react');
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { hashHistory } from 'react-router';
import { browserHistory } from 'react-router';
var HomePage = require('../components/homePageComponent');

var Routes = (
    <Router history={hashHistory}>
        <Route path='/' component={HomePage} />
    </Router>
);

module.exports = Routes;


