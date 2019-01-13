// Actions for queued song values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { ANNOTATION_STORE } from '../storeKeys'
import { ANNOTATION_DEFAULTS } from '../defaultStates'

export const updateAnnotationStore = (payload = ANNOTATION_DEFAULTS) => ({
    type: ANNOTATION_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetAnnotationQueue = () => ({
    type: ANNOTATION_STORE,
    payload: ANNOTATION_DEFAULTS
})

