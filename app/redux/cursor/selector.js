import { createSelector } from 'reselect'
import { getStanzaIndexForVerse } from '../../api/album/verses'
import {
    getCursorIndex,
    getBeforeOnOrAfterCursor,
    getSongCursorWidth,
    getCursorWidth
} from '../../helpers/cursor'
import {
    mapIsActivated,
    mapActivatedTime,
    mapActivatedSceneIndex,
    mapActivatedVerseIndex
} from '../activated/selector'
import {
    mapLyricSongIndex,
    mapLyricSceneIndex,
    mapLyricVerseIndex
} from '../lyric/selector'
import {
    mapSelectedSongIndex,
    mapSelectedTime
} from '../selected/selector'
import {
    mapIsSliderMoving,
    mapSliderTime,
    mapSliderSceneIndex,
    mapSliderVerseIndex
} from '../slider/selector'
import {
    mapIsBannerHovering,
    mapBannerHoverTime
} from '../banner/selector'
import {
    getStartTimeForScene,
    getDurationForScene
} from '../../api/album/time'

export const mapCursorTime = createSelector(
    mapSelectedTime,
    mapIsActivated,
    mapActivatedTime,
    mapIsSliderMoving,
    mapSliderTime,
    (
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    ) => getCursorWidth({
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    })
)

export const mapSongCursorWidth = createSelector(
    mapIsBannerHovering,
    mapBannerHoverTime,
    mapSelectedTime,
    mapSelectedSongIndex,
    (
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    ) => getSongCursorWidth({
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    })
)

const mapSceneCursorIndex = createSelector(
    mapSliderSceneIndex,
    mapActivatedSceneIndex,
    mapLyricSceneIndex,
    (
        sliderSceneIndex,
        activatedSceneIndex,
        lyricSceneIndex
    ) => getCursorIndex(
        sliderSceneIndex,
        activatedSceneIndex,
        lyricSceneIndex
    )
)

export const getMapSceneCursorStatus = sceneIndex => createSelector(
    mapSceneCursorIndex,
    sceneCursorIndex => getBeforeOnOrAfterCursor(
        sceneCursorIndex,
        sceneIndex
    )
)

export const getMapSceneCursorWidth = sceneIndex => createSelector(
    mapSceneCursorIndex,
    mapSelectedSongIndex,
    mapSelectedTime,
    (
        sceneCursorIndex,
        selectedSongIndex,
        selectedTime
    ) => {
        const
            isSceneCursor = sceneIndex === sceneCursorIndex,
            sceneStartTime = getStartTimeForScene(
                selectedSongIndex,
                sceneIndex
            ),
            sceneDuration = getDurationForScene(
                selectedSongIndex,
                sceneIndex
            )

        return isSceneCursor ?
            (selectedTime - sceneStartTime) /
            sceneDuration * 100 : null
    }
)

export const mapVerseCursorIndex = createSelector(
    mapSliderVerseIndex,
    mapActivatedVerseIndex,
    mapLyricVerseIndex,
    (
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    ) => getCursorIndex(
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    )
)

export const getMapIsVerseCursor = verseIndex => createSelector(
    mapVerseCursorIndex,
    verseCursorIndex => verseIndex === verseCursorIndex
)

export const getMapVerseCursorStatus = verseIndex => createSelector(
    mapVerseCursorIndex,
    verseCursorIndex => getBeforeOnOrAfterCursor(
        verseCursorIndex,
        verseIndex
    )
)

export const getMapIsStanzaCursor = stanzaIndex => createSelector(
    mapLyricSongIndex,
    mapVerseCursorIndex,
    (
        lyricSongIndex,
        verseCursorIndex
    ) => (
        stanzaIndex === getStanzaIndexForVerse(
            lyricSongIndex,
            verseCursorIndex
        )
    )
)
