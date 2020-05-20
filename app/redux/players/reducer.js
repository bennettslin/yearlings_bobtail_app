// Reducers for players values.
import { PLAYERS_STORE } from '../../constants/store'
import { PLAYERS_DEFAULTS } from './default'

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
