import { THEATRE_STORE } from '../../../constants/store'
import { THEATRE_DEFAULTS } from './default'

export default (
    state = THEATRE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case THEATRE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
