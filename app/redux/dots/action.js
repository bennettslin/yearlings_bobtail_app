// Actions for window size.
import { getDefinedOnlyPayload } from '../actionHelper'
import { setDotInStorage } from '../storageHelper'

import { DOTS_STORE } from '../storeKeys'
import { DOTS_DEFAULTS } from '../defaultStates'

export const updateDotsStore = (payload = DOTS_DEFAULTS) => {
    for (const dotKey in payload) {
        payload.dotsBitNumber = setDotInStorage(dotKey, payload[dotKey])
    }

    return ({
        type: DOTS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
