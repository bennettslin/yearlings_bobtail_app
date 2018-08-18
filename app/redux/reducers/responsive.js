// Reducers for state based on window size.
import { RESPONSIVE_STORE } from 'constants/state'
import { RESPONSIVE_DEFAULTS } from '../defaultConstants'

export const ResponsiveStoreReducer = (
    state = RESPONSIVE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case RESPONSIVE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
