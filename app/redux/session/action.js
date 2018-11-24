// Actions for session values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SESSION_STORE } from '../storeKeys'
import { SESSION_DEFAULTS } from '../defaultStates'

export const updateSessionStore = (payload = SESSION_DEFAULTS) => {


    const {
        selectedWikiIndex
    } = payload

    if (selectedWikiIndex === 0) {
        // If wiki is reset, also reset related state.
        payload.carouselAnnotationIndex = 0
        payload.selectedWikiUrl = ''
    }

    return ({
        type: SESSION_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
