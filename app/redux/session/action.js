// Actions for session values.
import { SESSION_STORE } from '../../constants/store'
import { SESSION_WIKI_DEFAULTS } from './default'

export const toggleAudioOptionIndex = () => ({
    type: SESSION_STORE,
    payload: { toggledAudioOptionIndex: true },
})

export const updateShownNavBookIndex = shownNavBookIndex => ({
    type: SESSION_STORE,
    payload: { shownNavBookIndex },
})

export const updateWikiIndices = ({
    selectedWikiIndex,
    wikiAnnotationIndex,
} = SESSION_WIKI_DEFAULTS) => ({
    type: SESSION_STORE,
    payload: {
        selectedWikiIndex,
        wikiAnnotationIndex,
    },
})

export const updateEarColumnIndex = earColumnIndex => ({
    type: SESSION_STORE,
    payload: { earColumnIndex },
})
