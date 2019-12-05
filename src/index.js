import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from 'redux-thunk';
import reducers from './reducers'

import BaseComponent from './components/BaseComponent';
import BookList from './components/BookDetails';

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router>
            <Switch>
                <Route exact path= "/" component = {BaseComponent} />>
                <Route path= "/detail" component ={BookList} />
            </Switch>
            </Router>
    </Provider>,
    document.getElementById('root')
)