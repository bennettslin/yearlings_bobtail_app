import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

// Import these here just to make them available.
import './utils/logger'
import './utils/analytics'

import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { Provider } from 'react-redux'

import rootReducer from './redux/rootReducer'

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
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
