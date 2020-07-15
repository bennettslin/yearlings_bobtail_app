import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getCombinedReducers } from './app/redux'
import { getRoutingSongIndex } from './app/helpers/routing'

// Import these here just to make them available.
import './app/utils/logger'
import './app/utils/analytics'
import './app/scss/app'

// App styles must be imported after global styles.
import {
    getWrapRootElement,
    getWrapPageElement
} from './app/utils/gatsby'

const store = createStore(
    // Initialise store with routing song index.
    getCombinedReducers(getRoutingSongIndex()),
    devToolsEnhancer()
)

export const wrapRootElement = getWrapRootElement(store)
export const wrapPageElement = getWrapPageElement()
