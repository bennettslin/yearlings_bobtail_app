import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { devToolsEnhancer } from 'redux-devtools-extension'

// Import these here just to make them available.
import './album'
import './utils/logger'
import './utils/analytics'

import rootReducer from './redux'

import './scss/app.scss'

// Get routes depending on whether in delivery or production.
// eslint-disable-next-line import/no-unresolved
import Routes from 'routes'

/**
 * Force Webpack to pick these up, as they're only referenced in the HTML file.
 * From https://favicon.io.
 */
import '../assets/favicon/android-chrome-192x192.png'
import '../assets/favicon/android-chrome-512x512.png'
import '../assets/favicon/apple-touch-icon.png'
import '../assets/favicon/favicon-16x16.png'
import '../assets/favicon/favicon-32x32.png'
import '../assets/favicon/favicon.ico'

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)

ReactDOM.render(
    <Provider {...{ store }} >
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('app')
)
