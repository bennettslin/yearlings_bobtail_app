// Actions for toggled views.
import { setBoolInStorage } from '../../utils/window'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    TOGGLE_STORE,
    IS_CAROUSEL_SHOWN
} from '../storeKeys'
import { TOGGLE_DEFAULTS } from '../defaultStates'

export const updateToggleStore = (payload = TOGGLE_DEFAULTS) => {

    const { isCarouselShown } = payload

    if (hasKey(isCarouselShown)) {
        setBoolInStorage(IS_CAROUSEL_SHOWN, isCarouselShown)
    }

    return ({
        type: TOGGLE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
