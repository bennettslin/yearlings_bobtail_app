import { STAGE_STORE } from '../../../constants/store'
import { STAGE_DEFAULTS } from './default'

export default (
    state = STAGE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case STAGE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
