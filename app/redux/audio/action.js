// Actions for audio updates.
import { getDefinedOnlyPayload } from '../actionHelper'

import { AUDIO_STORE } from '../storeKeys'
import { AUDIO_DEFAULTS } from '../defaultStates'

const updateAudioStore = (
    payload = AUDIO_DEFAULTS

) => {
    return ({
        type: AUDIO_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

const resetAudioQueue = () => {
    return ({
        type: AUDIO_STORE,
        payload: {
            queuedPlayFromLogue: false,
            queuedPlaySongIndex: -1,
            queuedPlayVerseIndex: -1
        }
    })
}

export {
    updateAudioStore,
    resetAudioQueue
}
