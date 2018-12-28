// Actions for curtain transitions.
import { getDefinedOnlyPayload } from '../actionHelper'

import { CURTAIN_STORE } from '../storeKeys'
import { CURTAIN_DEFAULTS } from '../defaultStates'

export const updateCurtainStore = (payload = CURTAIN_DEFAULTS) => {

    return ({
        type: CURTAIN_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
