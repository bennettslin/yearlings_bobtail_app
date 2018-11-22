// Reducers for accessed values.
import { ACCESS_STORE } from '../storeKeys'
import { ACCESS_DEFAULTS } from '../defaultStates'

export default (
    state = ACCESS_DEFAULTS,
    action
) => {
    switch (action.type) {
        case ACCESS_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
