import { createSelector } from 'reselect'
import { mapSelectedSongIndex } from '../selected/selectors'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'

export const mapPlayersBitNumber = (
    { playersStore: { playersBitNumber } }
) => playersBitNumber

export const mapNextPlayerToRender = (
    { playersStore: { nextPlayerToRender } }
) => nextPlayerToRender

export const mapPlayerCanPlayThrough = createSelector(
    mapSelectedSongIndex,
    mapPlayersBitNumber,
    (
        selectedSongIndex,
        playersBitNumber
    ) => getPlayerCanPlayThroughFromBit(
        selectedSongIndex,
        playersBitNumber
    )
)
