// Actions for audio updates.
import { AUDIO_STORE } from '../../constants/store'
import { AUDIO_DEFAULTS } from './default'

export const updateIsPlaying = (isPlaying = AUDIO_DEFAULTS.isPlaying) => ({
    type: AUDIO_STORE,
    payload: { isPlaying },
})
