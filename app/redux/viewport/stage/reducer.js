import { STAGE_STORE } from '../../storeKeys'
import { STAGE_DEFAULTS } from '../../defaultStates'

export default (
    state = STAGE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case STAGE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
