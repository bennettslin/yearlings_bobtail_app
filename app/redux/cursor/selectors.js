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
} from '../activated/selectors'
import {
    mapLyricSongIndex,
    mapLyricSceneIndex,
    mapLyricVerseIndex
} from '../lyric/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedTime
} from '../selected/selectors'
import {
    mapIsSliderMoving,
    mapSliderTime,
    mapSliderSceneIndex,
    mapSliderVerseIndex
} from '../slider/selectors'
import {
    mapIsBannerHovering,
    mapBannerHoverTime
} from '../banner/selectors'

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

export const mapSceneCursorIndex = createSelector(
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

export const getMapIsSceneCursor = sceneIndex => createSelector(
    mapSceneCursorIndex,
    sceneCursorIndex => sceneIndex === sceneCursorIndex
)

export const getMapSceneCursorStatus = sceneIndex => createSelector(
    mapSceneCursorIndex,
    sceneCursorIndex => getBeforeOnOrAfterCursor(
        sceneCursorIndex,
        sceneIndex
    )
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
