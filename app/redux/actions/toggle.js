// Actions for toggled views.
import { getDefinedOnlyPayload } from './helper'

import { TOGGLE_STORE } from '../storeKeys'
import { TOGGLE_DEFAULTS } from '../defaultStates'

export const updateToggleStore = (payload = TOGGLE_DEFAULTS) => ({
    type: TOGGLE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
