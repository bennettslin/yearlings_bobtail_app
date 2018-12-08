// Actions for player updates.
import { getDefinedOnlyPayload } from '../actionHelper'

import { PLAYING_STORE } from '../storeKeys'
import { PLAYING_DEFAULTS } from '../defaultStates'

const updatePlayingStore = (
    payload = PLAYING_DEFAULTS

) => {
    return ({
        type: PLAYING_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

const resetPlayingQueue = () => {
    return ({
        type: PLAYING_STORE,
        payload: {
            queuedPlayFromLogue: false,
            queuedPlaySongIndex: -1,
            queuedPlayVerseIndex: -1
        }
    })
}

export {
    updatePlayingStore,
    resetPlayingQueue
}
