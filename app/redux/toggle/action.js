// Actions for toggled views.
import { setBoolInStorage } from '../storageHelper'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    TOGGLE_STORE,
    IS_ADMIN_ON,
    IS_CAROUSEL_SHOWN
} from '../storeKeys'
import { TOGGLE_DEFAULTS } from '../defaultStates'

export const updateToggleStore = (payload = TOGGLE_DEFAULTS) => {

    const {
        isAdminOn,
        isCarouselShown
    } = payload

    if (hasKey(isAdminOn)) {
        setBoolInStorage(IS_ADMIN_ON, isAdminOn)
    }
    if (hasKey(isCarouselShown)) {
        setBoolInStorage(IS_CAROUSEL_SHOWN, isCarouselShown)
    }

    return ({
        type: TOGGLE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
