// Actions for session values.
import { setInStorage } from '../../utils/window'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    SESSION_STORE,
    SELECTED_AUDIO_OPTION_INDEX
} from '../storeKeys'
import {
    SESSION_DEFAULTS,
    SESSION_WIKI_DEFAULTS
} from '../defaultStates'

export const updateSessionStore = (payload = SESSION_DEFAULTS) => {

    const { selectedAudioOptionIndex } = payload

    if (hasKey(selectedAudioOptionIndex)) {
        setInStorage(SELECTED_AUDIO_OPTION_INDEX, selectedAudioOptionIndex)
    }

    return ({
        type: SESSION_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const resetWiki = () => {
    return ({
        type: SESSION_STORE,
        payload: SESSION_WIKI_DEFAULTS
    })
}
