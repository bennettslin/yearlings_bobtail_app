// Actions for slider state.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SLIDER_STORE } from '../storeKeys'
import { SLIDER_DEFAULTS } from '../defaultStates'

export const updateSliderStore = (payload = SLIDER_DEFAULTS) => ({
    type: SLIDER_STORE,
    payload: getDefinedOnlyPayload(payload)
})
