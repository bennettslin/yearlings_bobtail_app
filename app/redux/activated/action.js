// Actions for activated state.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { ACTIVATED_STORE } from '../../constants/store'
import { ACTIVATED_DEFAULTS } from './default'

export const updateActivatedStore = (payload = ACTIVATED_DEFAULTS) => ({
    type: ACTIVATED_STORE,
    payload: getDefinedOnlyPayload(payload)
})
