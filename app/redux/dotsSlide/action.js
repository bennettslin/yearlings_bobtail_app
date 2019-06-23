// Actions for dots slide activated texts.
import { getDefinedOnlyPayload } from '../actionHelper'

import { DOTS_SLIDE_STORE } from '../storeKeys'

export const updateDotsSlideStore = (payload) => ({
    type: DOTS_SLIDE_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetActivatedDots = () => ({
    type: DOTS_SLIDE_STORE
})
