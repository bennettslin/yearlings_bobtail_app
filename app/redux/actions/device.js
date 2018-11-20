// Actions for window size.
import { getDefinedOnlyPayload } from './helper'

import { DEVICE_STORE } from 'constants/state'
import { DEVICE_DEFAULTS } from '../defaultStates'

export const updateDeviceStore = (payload = DEVICE_DEFAULTS) => ({
    type: DEVICE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
