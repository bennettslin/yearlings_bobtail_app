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

// These reroute to the routing container in production.
import Annotations from 'admin/containers/Annotations'
import Previewer from 'admin/containers/Previewer'
import Progress from 'admin/containers/Progress'

import RoutingContainer from './containers/Routing'

// Force Webpack to pick these up, as they're only referenced in the HTML file.
require('assets/favicon/android-chrome-192x192.png')
require('assets/favicon/android-chrome-512x512.png')
require('assets/favicon/apple-touch-icon.png')
require('assets/favicon/favicon-16x16.png')
require('assets/favicon/favicon-32x32.png')
require('assets/favicon/favicon.ico')

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
                        path: '/Annotations',
                        component: Annotations
                    }}
                />
                <Route
                    exact
                    {...{
                        path: '/Previewer',
                        component: Previewer
                    }}
                />
                <Route
                    exact
                    {...{
                        path: '/Progress',
                        component: Progress
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
