import { createSelector } from 'reselect'
import {
    getSongTrackerWidth,
    getSceneTrackerWidth,
    getVerseTrackerLength
} from '../../helpers/tracker'
import {
    mapSelectedSongIndex,
    mapSelectedTime
} from '../selected/selector'
import {
    mapIsBannerHovering,
    mapBannerHoverTime
} from '../banner/selector'
import {
    mapSceneCursorIndex,
    mapVerseCursorIndex
} from '../cursor/selector'

export const mapSongTrackerWidth = createSelector(
    mapIsBannerHovering,
    mapBannerHoverTime,
    mapSelectedTime,
    mapSelectedSongIndex,
    (
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    ) => getSongTrackerWidth({
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    })
)

export const getMapSceneTrackerWidth = sceneIndex => createSelector(
    mapSceneCursorIndex,
    mapSelectedSongIndex,
    mapSelectedTime,
    (
        sceneCursorIndex,
        selectedSongIndex,
        selectedTime
    ) => getSceneTrackerWidth({
        sceneIndex,
        sceneCursorIndex,
        selectedSongIndex,
        selectedTime
    })
)

export const getMapVerseTrackerLength = verseIndex => createSelector(
    mapVerseCursorIndex,
    mapSelectedSongIndex,
    mapSelectedTime,
    (
        verseCursorIndex,
        selectedSongIndex,
        selectedTime
    ) => getVerseTrackerLength({
        verseIndex,
        verseCursorIndex,
        selectedSongIndex,
        selectedTime
    })
)