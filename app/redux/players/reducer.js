// Reducers for players values.
import { hasKey } from '../../helpers/action'
import { getBitFromPlayerCanPlayThrough } from '../../helpers/player'
import { PLAYERS_STORE } from '../../constants/store'
import { PLAYERS_DEFAULTS } from './default'

export default (
    state = PLAYERS_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case PLAYERS_STORE: {
            const
                { songIndex } = payload,
                { playersBit } = state
            return {
                ...state,
                ...hasKey(songIndex) ? {
                    playersBit: getBitFromPlayerCanPlayThrough({
                        bit: playersBit,
                        key: songIndex,
                    }),
                } : payload,
            }
        }
        default:
            return state
    }
}
