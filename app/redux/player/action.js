// Actions for player updates.
import { getDefinedOnlyPayload } from '../actionHelper'

import { PLAYER_STORE } from '../storeKeys'
import { PLAYER_DEFAULTS } from '../defaultStates'

const updatePlayerStore = (
    payload = PLAYER_DEFAULTS

) => {
    return ({
        type: PLAYER_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

const resetPlayerQueue = () => {
    return ({
        type: PLAYER_STORE,
        payload: {
            queuedPlayerSongIndex: -1,
            queuedPlayerVerseIndex: -1
        }
    })
}

export {
    updatePlayerStore,
    resetPlayerQueue
}
