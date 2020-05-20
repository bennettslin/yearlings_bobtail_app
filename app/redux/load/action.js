// Actions for audio values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { LOAD_STORE } from '../../constants/store/keys'
import { LOAD_DEFAULTS } from '../defaultStates'

export const updateLoadStore = (payload = LOAD_DEFAULTS) => ({
    type: LOAD_STORE,
    payload: getDefinedOnlyPayload(payload)
})
