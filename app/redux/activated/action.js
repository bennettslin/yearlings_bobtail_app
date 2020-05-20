// Actions for activated state.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { ACTIVATED_STORE } from '../../constants/store/keys'
import { ACTIVATED_DEFAULTS } from '../defaultStates'

export const updateActivatedStore = (payload = ACTIVATED_DEFAULTS) => {
    const { activatedVerseIndex } = payload

    if (hasKey(activatedVerseIndex)) {
        payload.isActivated = activatedVerseIndex >= 0
    }

    return ({
        type: ACTIVATED_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
