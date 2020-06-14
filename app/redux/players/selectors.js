import { createSelector } from 'reselect'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex
} from '../selected/selectors'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'
import { PLAYERS_STORE } from '../../constants/store'
import { getStartTimeForVerse } from '../../api/album/time'

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

export const getMapPlayerPausedTime = songIndex => createSelector(
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    (
        selectedSongIndex,
        selectedVerseIndex
    ) => (
        songIndex === selectedSongIndex ?

            // If player is selected, get current time from selected verse.
            getStartTimeForVerse(
                selectedSongIndex,
                selectedVerseIndex

            // Otherwise, set it to zero.
            ) : 0
    )
)
