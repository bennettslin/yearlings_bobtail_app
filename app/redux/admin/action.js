// Actions for admin values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'
import { setBoolInStorage } from '../storageHelper'

import {
    ADMIN_STORE,
    IS_ADMIN_ON,
    IS_GLOBAL_ANNOTATIONS_ON
} from '../storeKeys'
import { ADMIN_DEFAULTS } from '../defaultStates'

export const updateAdminStore = (payload = ADMIN_DEFAULTS) => {

    const {
        isAdminOn,
        isGlobalAnnotationsOn
    } = payload

    if (hasKey(isAdminOn)) {
        setBoolInStorage(IS_ADMIN_ON, isAdminOn)
    }

    if (hasKey(isGlobalAnnotationsOn)) {
        setBoolInStorage(IS_GLOBAL_ANNOTATIONS_ON, isGlobalAnnotationsOn)
    }

    return ({
        type: ADMIN_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
