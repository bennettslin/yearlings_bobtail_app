import { createSelector } from 'reselect'
import { mapSelectedSongIndex } from '../selected/selector'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'
import { PLAYERS_STORE } from '../../constants/store'

export const mapPlayersBit = (
    { [PLAYERS_STORE]: { playersBit } },
) => playersBit

export const mapPlayerCanPlayThrough = createSelector(
    mapSelectedSongIndex,
    mapPlayersBit,
    (
        selectedSongIndex,
        playersBit,
    ) => getPlayerCanPlayThroughFromBit(
        selectedSongIndex,
        playersBit,
    ),
)
