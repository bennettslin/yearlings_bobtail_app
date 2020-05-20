// Actions for audio updates.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { AUDIO_STORE } from '../../constants/store'
import { QUEUED_AUDIO_DEFAULTS } from './default'

export const updateAudioStore = (payload) => ({
    type: AUDIO_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetAudioQueue = () => ({
    type: AUDIO_STORE,
    payload: QUEUED_AUDIO_DEFAULTS
})
