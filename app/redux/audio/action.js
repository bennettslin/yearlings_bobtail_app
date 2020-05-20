// Actions for audio updates.
import { getDefinedOnlyPayload } from '../actionHelper'

import { AUDIO_STORE } from '../../constants/store/keys'
import { AUDIO_DEFAULTS } from '../defaultStates'

export const updateAudioStore = (payload = AUDIO_DEFAULTS) => ({
    type: AUDIO_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetAudioQueue = () => ({
    type: AUDIO_STORE,
    payload: {
        queuedPlayFromLogue: false,
        queuedPlaySongIndex: -1,
        queuedPlayVerseIndex: -1
    }
})
