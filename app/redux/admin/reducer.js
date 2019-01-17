// Reducers for admin values.
import { ADMIN_STORE } from '../storeKeys'
import { ADMIN_DEFAULTS } from '../defaultStates'

export default (
    state = ADMIN_DEFAULTS,
    action
) => {
    switch (action.type) {
        case ADMIN_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
