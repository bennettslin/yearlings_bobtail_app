// Actions for activated state.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { ACTIVATED_STORE } from '../../constants/store'
import { ACTIVATED_DEFAULTS } from './default'

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
