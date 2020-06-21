import { ENTRANCE_STORE } from '../../constants/store'
import { ENTRANCE_DEFAULTS } from './default'

export default (
    state = ENTRANCE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ENTRANCE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
