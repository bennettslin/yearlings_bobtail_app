// Actions for window size.
import { getDefinedOnlyPayload } from '../actionHelper'

import { DEVICE_STORE } from '../storeKeys'
import { DEVICE_DEFAULTS } from '../defaultStates'

export const updateDeviceStore = (payload = DEVICE_DEFAULTS) => ({
    type: DEVICE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
