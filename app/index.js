/* global process */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { Provider } from 'react-redux'

// eslint-disable-next-line
import logger from './server/logger'

import reducers from './redux/reducers'

import './scss/app.scss'
import StateManager from './managers/StateManager'

// Why did you update?
const turnOnWDYULogging = false
if (process.env.NODE_ENV !== 'production' && turnOnWDYULogging) {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

const store = createStore(
    reducers,
    devToolsEnhancer()
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={StateManager}
                />
                <Route
                    exact
                    path="/:routingParamString/"
                    component={StateManager}
                />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)
