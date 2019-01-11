// Actions for actual mobile devices.
import { getDefinedOnlyPayload } from '../actionHelper'

import { MOBILE_STORE } from '../storeKeys'
import { MOBILE_DEFAULTS } from '../defaultStates'

export const updateMobileStore = (payload = MOBILE_DEFAULTS) => {

    return ({
        type: MOBILE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
