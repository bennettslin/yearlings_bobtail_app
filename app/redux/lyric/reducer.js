// Reducers for lyric and carousel state.
import { LYRIC_STORE } from '../../constants/store/keys'
import { LYRIC_DEFAULTS } from '../defaultStates'

export default (
    state = LYRIC_DEFAULTS,
    action
) => {
    switch (action.type) {
        case LYRIC_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
