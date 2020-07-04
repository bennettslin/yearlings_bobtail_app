import { createSelector } from 'reselect'
import { getStanzaIndexForVerse } from '../../api/album/verses'
import {
    getCursorIndex,
    getCursorTime,
    getIsVerseCursor
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

export const getMapIsSceneCursor = sceneIndex => createSelector(
    mapSceneCursorIndex,
    sceneCursorIndex => sceneIndex === sceneCursorIndex
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

export const getMapIsVerseCursor = ({
    verseIndex,
    inSlider,
    inVerseBar
}) => createSelector(
    mapVerseCursorIndex,
    mapIsEitherVerseBarShown,
    (
        verseCursorIndex,
        isEitherVerseBarShown
    ) => getIsVerseCursor({
        verseIndex,
        verseCursorIndex,
        inSlider,
        inVerseBar,
        isEitherVerseBarShown
    })
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
