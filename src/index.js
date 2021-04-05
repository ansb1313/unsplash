import ReactDOM from 'react-dom';
import React from 'react';
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux';

import App from './App';
import store from "./redux/store";
import History from "./lib/History";

ReactDOM.render(
    <Provider store={store}>
            <Router history={History}>
                <App/>
            </Router>
    </Provider>
    ,document.getElementById('root')
)