import React from 'react'
import AppContainer from '../../app/containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { getCombinedReducers } from '../../app/redux'

const store = createStore(
    getCombinedReducers(13),
    devToolsEnhancer()
)

export default () => (
    <Provider {...{ store }}>
        <AppContainer />
    </Provider>
)