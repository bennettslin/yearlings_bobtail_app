// Actions for window size.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { DEVICE_STORE } from '../storeKeys'
import {
    DEVICE_DEFAULTS,
    DEVICE_TRANSITION_DEFAULTS
} from '../defaultStates'

import {
    getIsDesktopWidth,
    getIsPhoneWidth
} from '../../helpers/responsive'

export const updateDeviceStore = (payload = DEVICE_DEFAULTS) => {
    const { deviceIndex } = payload

    if (hasKey(deviceIndex)) {
        payload.isDesktopWidth = getIsDesktopWidth(deviceIndex)
        payload.isPhoneWidth = getIsPhoneWidth(deviceIndex)
    }

    return ({
        type: DEVICE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const resetDeviceForTransition = () => {
    return ({
        type: DEVICE_STORE,
        payload: DEVICE_TRANSITION_DEFAULTS
    })
}
