/* global process */

import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { Provider } from 'react-redux'

// Import these here just to make them available.

/* eslint-disable no-unused-vars */
import logger from './utils/logger'
import sendEvent from './utils/analytics'
/* eslint-enable no-unused-vars */

import rootReducer from './redux/rootReducer'

import './scss/app.scss'
import RoutingContainer from './containers/Routing'

// Why did you update?
const turnOnWDYULogging = false
if (process.env.NODE_ENV !== 'production' && turnOnWDYULogging) {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)

ReactDOM.render(
    <Provider
        {...{ store }}
    >
        <Router>
            <Switch>
                <Route
                    exact
                    {...{
                        path: '/',
                        component: RoutingContainer
                    }}
                />
                <Route
                    exact
                    {...{
                        path: '/:routingParamString/',
                        component: RoutingContainer
                    }}
                />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)
