// Actions for window size.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { DEVICE_STORE } from '../storeKeys'
import { DEVICE_DEFAULTS } from '../defaultStates'

import {
    getIsDesktop,
    getIsPhone
} from '../../helpers/responsive'

export const updateDeviceStore = (payload = DEVICE_DEFAULTS) => {

    const { deviceIndex } = payload

    if (hasKey(deviceIndex)) {
        payload.isDesktop = getIsDesktop(deviceIndex)
        payload.isPhone = getIsPhone(deviceIndex)
    }

    return ({
        type: DEVICE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
