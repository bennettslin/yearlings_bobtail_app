// Actions for players values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { PLAYERS_STORE } from '../storeKeys'
import { PLAYERS_DEFAULTS } from '../defaultStates'

export const updatePlayersStore = (payload = PLAYERS_DEFAULTS) => {

    return ({
        type: PLAYERS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
