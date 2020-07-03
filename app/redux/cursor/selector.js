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
    mapLyricVerseIndex
} from '../lyric/selector'
import {
    mapQueuedScrollVerseIndex,
    mapQueuedScrollSceneIndex,
    mapQueuedScrollTime
} from '../scrollLyric/selector'
import {
    mapSelectedTime,
    mapSelectedSceneIndex
} from '../selected/selector'
import {
    mapIsSliderMoving,
    mapSliderTime,
    mapSliderSceneIndex,
    mapSliderVerseIndex
} from '../slider/selector'
import { mapIsEitherVerseBarShown } from '../verseBars/selector'

export const mapCursorTime = createSelector(
    mapQueuedScrollTime,
    mapQueuedScrollVerseIndex,
    mapSelectedTime,
    mapIsActivated,
    mapActivatedTime,
    mapIsSliderMoving,
    mapSliderTime,
    (
        queuedScrollTime,
        queuedScrollVerseIndex,
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    ) => getCursorTime({
        queuedScrollTime,
        queuedScrollVerseIndex,
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    })
)

export const mapSceneCursorIndex = createSelector(
    mapQueuedScrollSceneIndex,
    mapSliderSceneIndex,
    mapActivatedSceneIndex,
    mapSelectedSceneIndex,
    (
        queuedScrollSceneIndex,
        sliderSceneIndex,
        activatedSceneIndex,
        selectedSceneIndex
    ) => getCursorIndex(
        queuedScrollSceneIndex,
        sliderSceneIndex,
        activatedSceneIndex,
        selectedSceneIndex
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
    mapQueuedScrollVerseIndex,
    mapSliderVerseIndex,
    mapActivatedVerseIndex,
    mapLyricVerseIndex,
    (
        queuedScrollVerseIndex,
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    ) => getCursorIndex(
        queuedScrollVerseIndex,
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
