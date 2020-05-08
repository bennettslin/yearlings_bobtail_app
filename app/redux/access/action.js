// Actions for accessed values.
import { setBoolInStorage } from '../../utils/window'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    IS_ACCESS_ON,
    ACCESS_STORE
} from '../storeKeys'
import {
    ACCESS_DEFAULTS,
    ACCESS_DOT_DEFAULTS,
    ACCESS_NAV_DEFAULTS
} from '../defaultStates'

export const updateAccessStore = (payload = ACCESS_DEFAULTS) => {

    const { isAccessOn } = payload

    if (hasKey(isAccessOn)) {
        setBoolInStorage(IS_ACCESS_ON, isAccessOn)
    }

    return {
        type: ACCESS_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}

export const resetAccessedDot = () => ({
    type: ACCESS_STORE,
    payload: ACCESS_DOT_DEFAULTS
})

export const resetAccessedNav = () => ({
    type: ACCESS_STORE,
    payload: ACCESS_NAV_DEFAULTS
})
