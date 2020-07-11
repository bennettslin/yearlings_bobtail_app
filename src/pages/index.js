import React from 'react'
import AppContainer from '../../app/containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import rootReducer, { getCombinedReducers } from '../../app/redux'

const store = createStore(
    // rootReducer,
    getCombinedReducers(5),
    devToolsEnhancer()
)

export default () => (
    <Provider {...{ store }}>
        <AppContainer />
    </Provider>
)
