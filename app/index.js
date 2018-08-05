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
import RoutingManager from './managers/RoutingManager'

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
                <Route exact path="/" component={RoutingManager} />
                <Route exact path="/:routingParamString/" component={RoutingManager} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)
