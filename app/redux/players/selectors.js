import { createSelector } from 'reselect'
import { mapSelectedSongIndex } from '../selected/selectors'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'
import { PLAYERS_STORE } from '../../constants/store'

export const mapPlayersBit = (
    { [PLAYERS_STORE]: { playersBit } }
) => playersBit

export const mapNextPlayerToRender = (
    { [PLAYERS_STORE]: { nextPlayerToRender } }
) => nextPlayerToRender

export const mapPlayerCanPlayThrough = createSelector(
    mapSelectedSongIndex,
    mapPlayersBit,
    (
        selectedSongIndex,
        playersBit
    ) => getPlayerCanPlayThroughFromBit(
        selectedSongIndex,
        playersBit
    )
)
