/* eslint-disable react/prop-types */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getCombinedReducers } from './app/redux'

// Import these here just to make them available.
import './app/utils/logger'
import './app/utils/analytics'
import './app/scss/app'

// TODO: Seed store with songIndex from window location pathname.

const store = createStore(
    getCombinedReducers(),
    devToolsEnhancer()
)

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        {element}
    </Provider>
)

// TODO: Put wrapper components that don't get unmounted on page change here.

export const wrapPageElement = ({ element }) => (
    <div className="test">
        {element}
    </div>
)

