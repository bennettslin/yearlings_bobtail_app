// Actions for queued song values.
import { getDefinedOnlyPayload } from '../../helpers/action'

import { ANNOTATION_STORE } from '../../constants/store'
import { ANNOTATION_DEFAULTS } from './default'

export const updateAnnotationStore = payload => ({
    type: ANNOTATION_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetAnnotationQueue = () => ({
    type: ANNOTATION_STORE,
    payload: ANNOTATION_DEFAULTS
})

