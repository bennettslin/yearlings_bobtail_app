// Reducers for song and player state.
import { SELECTED_STORE } from '../../constants/store'
import { SELECTED_DEFAULTS } from './default'

export default (
    state = SELECTED_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SELECTED_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
