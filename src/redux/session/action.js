// Actions for session values.
import { SESSION_STORE } from '../../constants/store'
import { SESSION_WIKI_DEFAULTS } from './default'

export const toggleIsSongRepeatOn = () => ({
    type: SESSION_STORE,
    payload: { toggledIsSongRepeatOn: true },
})

export const incrementVolumeIndex = () => ({
    type: SESSION_STORE,
    payload: { incrementedVolumeIndex: true },
})

export const decrementVolumeIndex = () => ({
    type: SESSION_STORE,
    payload: { decrementedVolumeIndex: true },
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

export const updateIsCopiedUrl = (isCopiedUrl = false) => ({
    type: SESSION_STORE,
    payload: { isCopiedUrl },
})
