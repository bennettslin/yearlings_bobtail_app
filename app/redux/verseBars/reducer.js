// Reducers for determining verse bars.
import { VERSE_BARS_STORE } from '../../constants/store'
import { VERSE_BARS_DEFAULTS } from './default'

export default (
    state = VERSE_BARS_DEFAULTS,
    action
) => {
    switch (action.type) {
        case VERSE_BARS_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
