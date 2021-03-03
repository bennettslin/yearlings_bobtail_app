import { createSelector } from 'reselect'
import {
    getSongTrackerWidth,
    getSceneTrackerWidth,
    getVerseTrackerLength,
} from '../../helpers/tracker'
import { mapSelectedSongIndex } from '../selected/selector'
import { mapBannerHoverTime } from '../banner/selector'
import {
    mapSceneCursorIndex,
    getMapVerseCursorIndex,
    mapCursorTime,
} from '../cursor/selector'
import { mapIsPlaying } from '../audio/selector'

export const getMapSongTrackerWidth = currentPlayerTime => createSelector(
    mapSelectedSongIndex,
    mapBannerHoverTime,
    mapCursorTime,
    mapIsPlaying,
    (
        selectedSongIndex,
        bannerHoverTime,
        cursorTime,
        isPlaying,
    ) => getSongTrackerWidth({
        selectedSongIndex,
        bannerHoverTime,
        cursorTime,
        currentPlayerTime,
        isPlaying,
    }),
)

export const getMapSceneTrackerWidth = ({
    sceneIndex,
    currentPlayerTime,
}) => createSelector(
    mapSceneCursorIndex,
    mapSelectedSongIndex,
    mapCursorTime,
    mapIsPlaying,
    (
        sceneCursorIndex,
        selectedSongIndex,
        cursorTime,
        isPlaying,
    ) => getSceneTrackerWidth({
        sceneIndex,
        sceneCursorIndex,
        selectedSongIndex,
        cursorTime,
        currentPlayerTime,
        isPlaying,
    }),
)

export const getMapVerseTrackerLength = ({
    verseIndex,
    currentPlayerTime,
}) => createSelector(
    getMapVerseCursorIndex(),
    mapSelectedSongIndex,
    mapCursorTime,
    mapIsPlaying,
    (
        verseCursorIndex,
        selectedSongIndex,
        cursorTime,
        isPlaying,
    ) => getVerseTrackerLength({
        verseIndex,
        verseCursorIndex,
        selectedSongIndex,
        cursorTime,
        currentPlayerTime,
        isPlaying,
    }),
)
