/* eslint-disable react/prop-types */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { getCombinedReducers } from './app/redux'
import AppContainer from './app/containers/App'

const store = createStore(
    getCombinedReducers()
)

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        {element}
    </Provider>
)

export const wrapPageElement = ({ element }) => (
    <AppContainer>
        {element}
    </AppContainer>
)
