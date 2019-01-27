import { THEATRE_STORE } from '../../storeKeys'
import { THEATRE_DEFAULTS } from '../../defaultStates'

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
