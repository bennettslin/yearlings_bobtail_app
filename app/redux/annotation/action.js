// Actions for queued song values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { ANNOTATION_STORE } from '../storeKeys'
import { ANNOTATION_DEFAULTS } from '../defaultStates'

export const updateAnnotationStore = (payload = ANNOTATION_DEFAULTS) => {

    return ({
        type: ANNOTATION_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
