// Actions for viewport size.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { VIEWPORT_STORE } from '../storeKeys'
import {
    VIEWPORT_DEFAULTS,
    VIEWPORT_TRANSITION_DEFAULTS
} from '../defaultStates'

import {
    getIsDesktopWidth,
    getIsTabletWidth,
    getIsPhoneWidth
} from '../../helpers/responsive'

export const updateViewportStore = (payload = VIEWPORT_DEFAULTS) => {
    const { deviceWidthIndex } = payload

    if (hasKey(deviceWidthIndex)) {
        payload.isDesktopWidth = getIsDesktopWidth(deviceWidthIndex)
        payload.isTabletWidth = getIsTabletWidth(deviceWidthIndex)
        payload.isPhoneWidth = getIsPhoneWidth(deviceWidthIndex)
    }

    return ({
        type: VIEWPORT_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const resetViewportForTransition = () => ({
    type: VIEWPORT_STORE,
    payload: VIEWPORT_TRANSITION_DEFAULTS
})
