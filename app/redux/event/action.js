// Actions for event values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { EVENT_STORE } from '../storeKeys'
import { EVENT_DEFAULTS } from '../defaultStates'

export const updateEventStore = (payload = EVENT_DEFAULTS) => {

    return ({
        type: EVENT_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
