// Actions for admin values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'
import { setBoolInStorage } from 'utils/window'

import {
    ADMIN_STORE,
    IS_GLOBAL_ANNOTATIONS_ON
} from '../storeKeys'
import { ADMIN_DEFAULTS } from '../defaultStates'

export const updateAdminStore = (payload = ADMIN_DEFAULTS) => {

    const { isGlobalAnnotationsOn } = payload

    if (hasKey(isGlobalAnnotationsOn)) {
        setBoolInStorage(IS_GLOBAL_ANNOTATIONS_ON, isGlobalAnnotationsOn)
    }

    return ({
        type: ADMIN_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
