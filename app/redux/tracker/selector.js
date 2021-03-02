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

export const getMapSongTrackerWidth = selectedPlayerTime => createSelector(
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
        selectedPlayerTime,
        isPlaying,
    })
)

export const getMapSceneTrackerWidth = ({
    sceneIndex,
    selectedPlayerTime,
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
        selectedPlayerTime,
        isPlaying,
    })
)

export const getMapVerseTrackerLength = ({
    verseIndex,
    selectedPlayerTime,
}) => createSelector(
    getMapVerseCursorIndex(),
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
        selectedPlayerTime,
        isPlaying,
    })
)
