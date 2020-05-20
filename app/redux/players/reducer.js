// Reducers for players values.
import { PLAYERS_STORE } from '../../constants/store/keys'
import { PLAYERS_DEFAULTS } from '../defaultStates'

export default (
    state = PLAYERS_DEFAULTS,
    action
) => {
    switch (action.type) {
        case PLAYERS_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
