import { createSelector } from 'reselect'
import { getStanzaIndexForVerse } from '../../api/album/verses'
import {
    getCursorIndex,
    getBeforeOnOrAfterCursor,
    getCursorTime
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
import { mapSelectedTime } from '../selected/selector'
import {
    mapIsSliderMoving,
    mapSliderTime,
    mapSliderSceneIndex,
    mapSliderVerseIndex
} from '../slider/selector'

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
    ) => getCursorTime({
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
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
