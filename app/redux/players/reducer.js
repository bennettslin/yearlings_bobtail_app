// Reducers for players values.
import { PLAYERS_STORE } from '../../constants/store'
import { PLAYERS_DEFAULTS } from './default'

export default (
    state = PLAYERS_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case PLAYERS_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
