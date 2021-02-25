// Actions for accessed values.
import { setBoolInStorage } from '../../utils/storage'
import {
    hasKey,
    getDefinedOnlyPayload,
} from '../../helpers/action'
import {
    IS_ACCESS_ON,
    ACCESS_STORE,
} from '../../constants/store'
import {
    ACCESS_DOT_DEFAULTS,
    ACCESS_NAV_DEFAULTS,
} from './default'

export const updateAccessStore = payload => {

    const { isAccessOn } = payload

    if (hasKey(isAccessOn)) {
        setBoolInStorage(IS_ACCESS_ON, isAccessOn)
    }

    return {
        type: ACCESS_STORE,
        payload: getDefinedOnlyPayload(payload, ACCESS_STORE),
    }
}

export const resetAccessedDot = () => ({
    type: ACCESS_STORE,
    payload: ACCESS_DOT_DEFAULTS,
})

export const resetAccessedNav = () => ({
    type: ACCESS_STORE,
    payload: ACCESS_NAV_DEFAULTS,
})
