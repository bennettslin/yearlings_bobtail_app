// Actions for player updates.
import { getDefinedOnlyPayload } from '../actionHelper'

import { PLAYER_STORE } from '../storeKeys'
import { PLAYER_DEFAULTS } from '../defaultStates'

export const updatePlayerStore = (
    payload = PLAYER_DEFAULTS

) => {
    return ({
        type: PLAYER_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
