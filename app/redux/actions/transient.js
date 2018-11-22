// Actions for transient states.
import { getDefinedOnlyPayload } from './helper'

import { TRANSIENT_STORE } from '../storeKeys'
import { TRANSIENT_DEFAULTS } from '../defaultStates'

export const updateTransientStore = (payload = TRANSIENT_DEFAULTS) => ({
    type: TRANSIENT_STORE,
    payload: getDefinedOnlyPayload(payload)
})
