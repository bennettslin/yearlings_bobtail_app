// Reducers for error values.
import { ERROR_STORE } from '../../constants/store'
import { ERROR_DEFAULTS } from './default'

export default (
    state = ERROR_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case ERROR_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
