// Reducers for accessed values.
import { ACCESS_STORE } from '../../constants/store'
import { ACCESS_DEFAULTS } from './default'

export default (
    state = ACCESS_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ACCESS_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
