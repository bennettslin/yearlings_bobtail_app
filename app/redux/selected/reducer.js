// Reducers for song and player state.
import { SELECTED_STORE } from '../storeKeys'
import { SELECTED_DEFAULTS } from '../defaultStates'

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
