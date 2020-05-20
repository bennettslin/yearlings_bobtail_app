// Reducers for accessed values.
import { ACCESS_STORE } from '../../constants/store'
import { ACCESS_DEFAULTS } from './default'

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
