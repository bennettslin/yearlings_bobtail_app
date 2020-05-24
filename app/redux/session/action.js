// Actions for session values.
import { setInStorage } from '../../helpers/storage'
import { getDefinedOnlyPayload } from '../../helpers/action'
import {
    SESSION_STORE,
    AUDIO_OPTION_INDEX
} from '../../constants/store'
import { SESSION_WIKI_DEFAULTS } from './default'

export const updateSessionStore = payload => ({
    type: SESSION_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const updateAudioOptionIndex = audioOptionIndex => {
    setInStorage(AUDIO_OPTION_INDEX, audioOptionIndex)

    return ({
        type: SESSION_STORE,
        payload: { audioOptionIndex }
    })
}

export const resetWiki = () => ({
    type: SESSION_STORE,
    payload: SESSION_WIKI_DEFAULTS
})
