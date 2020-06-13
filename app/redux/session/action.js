// Actions for session values.
import { setInStorage } from '../../helpers/storage'
import {
    SESSION_STORE,
    AUDIO_OPTION_INDEX
} from '../../constants/store'
import { SESSION_WIKI_DEFAULTS } from './default'

export const updateAudioOptionIndex = audioOptionIndex => {
    setInStorage(AUDIO_OPTION_INDEX, audioOptionIndex)

    return ({
        type: SESSION_STORE,
        payload: { audioOptionIndex }
    })
}

export const updateShownNavBookIndex = shownNavBookIndex => ({
    type: SESSION_STORE,
    payload: { shownNavBookIndex }
})

export const updateWikiIndices = ({
    selectedWikiIndex,
    wikiAnnotationIndex
} = SESSION_WIKI_DEFAULTS) => ({
    type: SESSION_STORE,
    payload: {
        selectedWikiIndex,
        wikiAnnotationIndex
    }
})
