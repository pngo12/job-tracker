import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './Redux/reducer'


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/dashboard" component={Dashboard} />
                    {/* <Route path="/addjob" component={Forms} /> */}
                </Switch> 
            </BrowserRouter>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
