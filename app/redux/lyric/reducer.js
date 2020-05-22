// Reducers for lyric and carousel state.
import { LYRIC_STORE } from '../../constants/store'
import { LYRIC_DEFAULTS } from './default'

export default (
    state = LYRIC_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case LYRIC_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
