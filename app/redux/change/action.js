// Actions for scene and song changes, and window resizes.
import { getDefinedOnlyPayload } from '../actionHelper'

import { CHANGE_STORE } from '../storeKeys'
import { CHANGE_DEFAULTS } from '../defaultStates'

export const updateChangeStore = (payload = CHANGE_DEFAULTS) => {

    return ({
        type: CHANGE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
