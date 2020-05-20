// Reducers for banner state.
import { BANNER_STORE } from '../../constants/store'
import { BANNER_DEFAULTS } from './default'

export default (
    state = BANNER_DEFAULTS,
    action
) => {
    switch (action.type) {
        case BANNER_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
