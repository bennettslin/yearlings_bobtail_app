// Actions for session values.
import { setInStorage } from '../../helpers/storage'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import {
    SESSION_STORE,
    SELECTED_AUDIO_OPTION_INDEX
} from '../../constants/store'
import { SESSION_WIKI_DEFAULTS } from './default'

export const updateSessionStore = (payload) => {

    const { selectedAudioOptionIndex } = payload

    if (hasKey(selectedAudioOptionIndex)) {
        setInStorage(SELECTED_AUDIO_OPTION_INDEX, selectedAudioOptionIndex)
    }

    return ({
        type: SESSION_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const resetWiki = () => ({
    type: SESSION_STORE,
    payload: SESSION_WIKI_DEFAULTS
})
