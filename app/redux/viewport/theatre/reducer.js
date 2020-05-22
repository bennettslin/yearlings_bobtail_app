import { THEATRE_STORE } from '../../../constants/store'
import { THEATRE_DEFAULTS } from './default'

export default (
    state = THEATRE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case THEATRE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
