// Actions for viewport size.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { VIEWPORT_STORE } from '../../constants/store'

import {
    getIsDesktopWidth,
    getIsTabletWidth,
    getIsPhoneWidth
} from '../../helpers/responsive'

export const updateViewportStore = (payload) => {
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
