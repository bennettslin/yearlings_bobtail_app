import React from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'

// Import these here just to make them available.
// import './app/utils/logger'
// import './app/utils/analytics'

import rootReducer from './app/redux'

// import './app/scss/app.scss'

const store = createStore(
    rootReducer
    // devToolsEnhancer()
)

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        {element}
    </Provider>
)

wrapRootElement.propTypes = {
    element: PropTypes.node.isRequired
}
