// Actions for audio updates.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { AUDIO_STORE } from '../../constants/store'

export const updateAudioStore = payload => ({
    type: AUDIO_STORE,
    payload: getDefinedOnlyPayload(payload, AUDIO_STORE),
})
