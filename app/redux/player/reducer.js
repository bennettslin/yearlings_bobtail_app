// Reducers for player updates.
import { PLAYER_STORE } from '../storeKeys'
import { PLAYER_DEFAULTS } from '../defaultStates'

export default (
    state = PLAYER_DEFAULTS,
    action
) => {
    switch (action.type) {
        case PLAYER_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
