// Actions for dots slide interactivated texts.
import { getDefinedOnlyPayload } from '../actionHelper'

import { DOTS_SLIDE_STORE } from '../storeKeys'
import { DOTS_SLIDE_DEFAULTS } from '../defaultStates'

export const updateDotsSlideStore = (payload = DOTS_SLIDE_DEFAULTS) => ({
    type: DOTS_SLIDE_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetInteractivatedDots = () => ({
    type: DOTS_SLIDE_STORE,
    payload: DOTS_SLIDE_DEFAULTS
})
