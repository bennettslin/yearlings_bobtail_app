// Actions for transient states.
import { getDefinedOnlyPayload } from '../actionHelper'

import { TRANSIENT_STORE } from '../../constants/store/keys'
import { TRANSIENT_DEFAULTS } from '../defaultStates'

export const updateTransientStore = (payload = TRANSIENT_DEFAULTS) => ({
    type: TRANSIENT_STORE,
    payload: getDefinedOnlyPayload(payload)
})
