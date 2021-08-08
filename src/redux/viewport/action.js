// Actions for viewport size.
import {
    hasKey,
    getDefinedOnlyPayload,
} from '../../helpers/action'
import { VIEWPORT_STORE } from '../../constants/store'
import { getViewportStore } from '../../helpers/resize/store'

export const updateViewportStore = payload => {
    const { windowWidth, windowHeight, isPromoPage } = payload

    if (hasKey(windowWidth) && hasKey(windowHeight)) {
        payload = getViewportStore({
            windowHeight,
            windowWidth,
            isPromoPage,
        })
    }

    return ({
        type: VIEWPORT_STORE,
        payload: getDefinedOnlyPayload(payload, VIEWPORT_STORE),
    })
}
