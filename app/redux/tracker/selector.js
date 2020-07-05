import { createSelector } from 'reselect'
import {
    getSongTrackerWidth,
    getSceneTrackerWidth,
    getVerseTrackerLength
} from '../../helpers/tracker'
import { mapSelectedSongIndex } from '../selected/selector'
import {
    mapIsBannerHovering,
    mapBannerHoverVerseIndex
} from '../banner/selector'
import {
    mapSceneCursorIndex,
    mapVerseCursorIndex,
    mapCursorTime
} from '../cursor/selector'

export const mapSongTrackerWidth = createSelector(
    mapIsBannerHovering,
    mapBannerHoverVerseIndex,
    mapSelectedSongIndex,
    mapCursorTime,
    (
        isBannerHovering,
        bannerHoverVerseIndex,
        selectedSongIndex,
        cursorTime
    ) => getSongTrackerWidth({
        isBannerHovering,
        bannerHoverVerseIndex,
        selectedSongIndex,
        cursorTime
    })
)

export const getMapSceneTrackerWidth = sceneIndex => createSelector(
    mapSceneCursorIndex,
    mapSelectedSongIndex,
    mapCursorTime,
    (
        sceneCursorIndex,
        selectedSongIndex,
        cursorTime
    ) => getSceneTrackerWidth({
        sceneIndex,
        sceneCursorIndex,
        selectedSongIndex,
        cursorTime
    })
)

export const getMapVerseTrackerLength = verseIndex => createSelector(
    mapVerseCursorIndex,
    mapSelectedSongIndex,
    mapCursorTime,
    (
        verseCursorIndex,
        selectedSongIndex,
        cursorTime
    ) => getVerseTrackerLength({
        verseIndex,
        verseCursorIndex,
        selectedSongIndex,
        cursorTime
    })
)
