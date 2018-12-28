// Actions for window resizing.
import { getDefinedOnlyPayload } from '../actionHelper'

import { WINDOW_STORE } from '../storeKeys'
import { WINDOW_DEFAULTS } from '../defaultStates'

export const updateWindowStore = (payload = WINDOW_DEFAULTS) => {

    return ({
        type: WINDOW_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
