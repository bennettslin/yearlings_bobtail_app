import { PLAYERS_STORE } from '../../constants/store'

export const mapCanPlayThrough = (
    { [PLAYERS_STORE]: { canPlayThrough } },
) => canPlayThrough
