// Actions for accessed values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { ACCESS_STORE } from '../storeKeys'
import { ACCESS_DEFAULTS } from '../defaultStates'

export const updateAccessStore = (payload = ACCESS_DEFAULTS) => {

    return ({
        type: ACCESS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
