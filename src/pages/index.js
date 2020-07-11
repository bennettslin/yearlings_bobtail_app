import React from 'react'
import AppContainer from '../../app/containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import rootReducer from '../../app/redux'

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)

export default () => (
    <Provider {...{ store }}>
        <AppContainer />
    </Provider>
)
