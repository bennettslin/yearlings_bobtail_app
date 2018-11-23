// Actions for audio values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { AUDIO_STORE } from '../storeKeys'
import { AUDIO_DEFAULTS } from '../defaultStates'

export const updateAudioStore = (payload = AUDIO_DEFAULTS) => {

    return ({
        type: AUDIO_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
