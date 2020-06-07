import { createSelector } from 'reselect'
import { mapSelectedSongIndex } from '../selected/selectors'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'

export const mapPlayersBit = (
    { playersStore: { playersBit } }
) => playersBit

export const mapNextPlayerToRender = (
    { playersStore: { nextPlayerToRender } }
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
