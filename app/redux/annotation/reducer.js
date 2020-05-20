// Reducers for queued song values.
import { ANNOTATION_STORE } from '../../constants/store'
import { ANNOTATION_DEFAULTS } from './default'

export default (
    state = ANNOTATION_DEFAULTS,
    action
) => {
    switch (action.type) {
        case ANNOTATION_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
