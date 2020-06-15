import { createSelector } from 'reselect'
import { getStanzaIndexForVerse } from '../../api/album/verses'
import {
    getCursorIndex,
    getBeforeOnOrAfter,
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
import { mapIsEitherVerseBarShown } from '../verseBars/selector'

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
    sceneCursorIndex => getBeforeOnOrAfter(
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

const getMapIsVerseCursorShown = (inSlider, inVerseBar) => createSelector(
    mapIsEitherVerseBarShown,
    isEitherVerseBarShown => (
        inSlider ||
        Boolean(inVerseBar) === isEitherVerseBarShown
    )
)

export const getMapIsVerseCursor = ({
    verseIndex,
    inSlider,
    inVerseBar
}) => createSelector(
    mapVerseCursorIndex,
    getMapIsVerseCursorShown(inSlider, inVerseBar),
    (
        verseCursorIndex,
        isVerseCursorShown
    ) => verseIndex === verseCursorIndex && isVerseCursorShown
)

export const getMapVerseCursorStatus = ({
    verseIndex,
    inSlider,
    inVerseBar
}) => createSelector(
    mapVerseCursorIndex,
    getMapIsVerseCursorShown(inSlider, inVerseBar),
    (
        verseCursorIndex,
        isVerseCursorShown
    ) => getBeforeOnOrAfter(
        verseCursorIndex,
        verseIndex,
        isVerseCursorShown
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
