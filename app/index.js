import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { Provider } from 'react-redux'

// Import these here just to make them available.
import './utils/logger'
import './utils/analytics'

import rootReducer from './redux/rootReducer'

import './scss/app.scss'

/**
 * These reroute to the routing container in production. A hacky approach
 * because I don't know what I'm doing...
 */

/* eslint-disable */
import Actors from 'admin/containers/Actors'
import Annotations from 'admin/containers/Annotations'
import LegacyPreviewer from 'admin/containers/LegacyPreviewer'
import Skies from 'admin/containers/Skies'
import Things from 'admin/containers/Things'
import Progress from 'admin/containers/Progress'
/* eslint-enable */

import RoutingContainer from './containers/Routing'

/**
 * Force Webpack to pick these up, as they're only referenced in the HTML file.
 * From https://favicon.io.
 */
require('../assets/favicon/android-chrome-192x192.png')
require('../assets/favicon/android-chrome-512x512.png')
require('../assets/favicon/apple-touch-icon.png')
require('../assets/favicon/favicon-16x16.png')
require('../assets/favicon/favicon-32x32.png')
require('../assets/favicon/favicon.ico')

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
                        path: '/Actors',
                        component: Actors
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
                        component: LegacyPreviewer
                    }}
                />
                <Route
                    exact
                    {...{
                        path: '/Things',
                        component: Things
                    }}
                />
                <Route
                    exact
                    {...{
                        path: '/Skies',
                        component: Skies
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
