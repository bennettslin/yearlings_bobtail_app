// Actions for dots slide interactivated texts.
import { getDefinedOnlyPayload } from '../actionHelper'

import { DOTS_SLIDE_STORE } from '../storeKeys'

export const updateDotsSlideStore = (payload) => ({
    type: DOTS_SLIDE_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetInteractivatedDots = () => ({
    type: DOTS_SLIDE_STORE
})
