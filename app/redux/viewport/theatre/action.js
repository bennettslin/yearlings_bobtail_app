import { getDefinedOnlyPayload } from '../../actionHelper'

import { THEATRE_STORE } from '../../storeKeys'
import { THEATRE_DEFAULTS } from '../../defaultStates'

export const updateTheatreStore = (payload = THEATRE_DEFAULTS) => ({
    type: THEATRE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
