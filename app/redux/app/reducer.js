/**
 * Reducers for app state. Set upon app mount and never updated. Doing this
 * here because we only render client-side, and I don't have the bandwidth to
 * set up middleware.
 */
import { APP_STORE } from '../../constants/store/keys'
import { APP_DEFAULTS } from './default'

export default (
    state = APP_DEFAULTS,
    action
) => {
    switch (action.type) {
        case APP_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
