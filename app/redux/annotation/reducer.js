// Reducers for queued song values.
import { ANNOTATION_STORE } from '../../constants/store'
import { ANNOTATION_DEFAULTS } from './default'

export default (
    state = ANNOTATION_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case ANNOTATION_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
