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
    const { deviceWidthIndex } = payload

    if (hasKey(deviceWidthIndex)) {
        payload.isDesktopWidth = getIsDesktopWidth(deviceWidthIndex)
        payload.isPhoneWidth = getIsPhoneWidth(deviceWidthIndex)
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
