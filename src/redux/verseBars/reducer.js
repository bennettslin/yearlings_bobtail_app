// Reducers for determining verse bars.
import { VERSE_BARS_STORE } from '../../constants/store'
import { VERSE_BARS_DEFAULTS } from './default'

export default (
    state = VERSE_BARS_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case VERSE_BARS_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
