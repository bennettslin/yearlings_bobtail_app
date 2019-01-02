// Actions for selected dots.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'
import { setInStorage } from '../storageHelper'

import {
    DOTS_STORE,
    DOTS_BIT_NUMBER
} from '../storeKeys'
import { DOTS_DEFAULTS } from '../defaultStates'

export const updateDotsStore = (payload = DOTS_DEFAULTS) => {
    const { dotsBitNumber } = payload

    if (hasKey(dotsBitNumber)) {
        setInStorage(DOTS_BIT_NUMBER, dotsBitNumber)
    }

    return ({
        type: DOTS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
