import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Redux/reducer'
import Dashboard from './components/dashboard/dashboard'
import Signup from './components/forms/signup'
import Login from './components/forms/login'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch> 
            </BrowserRouter>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
