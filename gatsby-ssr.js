import { createStore } from 'redux'
import { getCombinedReducers } from './app/redux'
import {
    getWrapRootElement,
    getWrapPageElement
} from './app/utils/gatsby'

const store = createStore(
    getCombinedReducers()
)

export const wrapRootElement = getWrapRootElement(store)
export const wrapPageElement = getWrapPageElement()
