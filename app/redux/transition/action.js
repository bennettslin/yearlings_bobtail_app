// Actions for can enter state.
import { getDefinedOnlyPayload } from '../actionHelper'

import { TRANSITION_STORE } from '../storeKeys'
import { TRANSITION_DEFAULTS } from '../defaultStates'

export const updateTransitionStore = (payload = TRANSITION_DEFAULTS) => ({
    type: TRANSITION_STORE,
    payload: getDefinedOnlyPayload(payload)
})
