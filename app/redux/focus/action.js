// Actions for focus values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { FOCUS_STORE } from '../storeKeys'
import { FOCUS_DEFAULTS } from '../defaultStates'

export const updateFocusStore = (payload = FOCUS_DEFAULTS) => ({
    type: FOCUS_STORE,
    payload: getDefinedOnlyPayload(payload)
})
