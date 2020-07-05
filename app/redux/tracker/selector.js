import { createSelector } from 'reselect'
import {
    getSongTrackerWidth,
    getSceneTrackerWidth,
    getVerseTrackerLength
} from '../../helpers/tracker'
import { mapSelectedSongIndex } from '../selected/selector'
import { mapBannerHoverTime } from '../banner/selector'
import {
    mapSceneCursorIndex,
    mapVerseCursorIndex,
    mapCursorTime
} from '../cursor/selector'
import { mapIsPlaying } from '../audio/selector'

export const getMapSongTrackerWidth = playerTime => createSelector(
    mapSelectedSongIndex,
    mapBannerHoverTime,
    mapCursorTime,
    mapIsPlaying,
    (
        selectedSongIndex,
        bannerHoverTime,
        cursorTime,
        isPlaying
    ) => getSongTrackerWidth({
        selectedSongIndex,
        bannerHoverTime,
        cursorTime,
        playerTime,
        isPlaying
    })
)

export const getMapSceneTrackerWidth = ({
    sceneIndex,
    playerTime
}) => createSelector(
    mapSceneCursorIndex,
    mapSelectedSongIndex,
    mapCursorTime,
    mapIsPlaying,
    (
        sceneCursorIndex,
        selectedSongIndex,
        cursorTime,
        isPlaying
    ) => getSceneTrackerWidth({
        sceneIndex,
        sceneCursorIndex,
        selectedSongIndex,
        cursorTime,
        playerTime,
        isPlaying
    })
)

export const getMapVerseTrackerLength = ({
    verseIndex,
    playerTime
}) => createSelector(
    mapVerseCursorIndex,
    mapSelectedSongIndex,
    mapCursorTime,
    mapIsPlaying,
    (
        verseCursorIndex,
        selectedSongIndex,
        cursorTime,
        isPlaying
    ) => getVerseTrackerLength({
        verseIndex,
        verseCursorIndex,
        selectedSongIndex,
        cursorTime,
        playerTime,
        isPlaying
    })
)
