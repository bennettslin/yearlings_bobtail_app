import React from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

// Import these here just to make them available.
import './app/utils/logger'
import './app/utils/analytics'

import rootReducer from './app/redux'

// TODO: Figure out where best to import these classes.
import './app/scss/app'

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)

// export const wrapRootElement = ({ element }) => (
//     <Provider {...{ store }}>
//         {element}
//     </Provider>
// )

export const wrapRootElement = ({ element }) => element

wrapRootElement.propTypes = {
    element: PropTypes.node.isRequired
}
