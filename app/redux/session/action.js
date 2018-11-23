// Actions for session values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SESSION_STORE } from '../storeKeys'
import { SESSION_DEFAULTS } from '../defaultStates'

export const updateSessionStore = (payload = SESSION_DEFAULTS) => {

    return ({
        type: SESSION_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
