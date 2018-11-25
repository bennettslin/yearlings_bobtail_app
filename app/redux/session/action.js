// Actions for session values.
import { setInStorage } from '../storageHelper'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    SESSION_STORE,
    SELECTED_AUDIO_OPTION_INDEX,
    SELECTED_OVERVIEW_OPTION
} from '../storeKeys'
import { SESSION_DEFAULTS } from '../defaultStates'

export const updateSessionStore = (payload = SESSION_DEFAULTS) => {

    const {
        selectedAudioOptionIndex,
        selectedOverviewOption,
        selectedWikiIndex
    } = payload

    if (hasKey(selectedAudioOptionIndex)) {
        setInStorage(SELECTED_AUDIO_OPTION_INDEX, selectedAudioOptionIndex)
    }

    if (hasKey(selectedOverviewOption)) {
        setInStorage(SELECTED_OVERVIEW_OPTION, selectedOverviewOption)
    }

    // If wiki is being reset, also reset related state.
    if (selectedWikiIndex === 0) {
        payload.carouselAnnotationIndex = 0
        payload.selectedWikiUrl = ''
    }

    return ({
        type: SESSION_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
