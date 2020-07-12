/* eslint-disable react/prop-types */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getCombinedReducers } from './app/redux'
import { getRoutingSongIndex } from './app/helpers/routing'

// Import these here just to make them available.
import './app/utils/logger'
import './app/utils/analytics'
import './app/scss/app'

// App styles must be imported after global styles.
import AppContainer from './app/containers/App'

const store = createStore(
    // Initialise store with routing song index.
    getCombinedReducers(getRoutingSongIndex()),
    devToolsEnhancer()
)

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        {element}
    </Provider>
)

export const wrapPageElement = ({ props }) => {
    const Page = props.pageResources.component
    return (
        <AppContainer {...{ Page }} />
    )
}
