import { createSelector } from 'reselect'
import {
    getStanzaIndexForVerse,
    getSceneIndexForVerse
} from '../../api/album/verses'
import {
    getCursorIndex,
    getCursorTime,
    getIsVerseCursor
} from '../../helpers/cursor'
import { mapActivatedVerseIndex } from '../activated/selector'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex
} from '../lyric/selector'
import { mapSelectedTime } from '../selected/selector'
import { mapSliderVerseIndex } from '../slider/selector'
import { mapIsEitherVerseBarShown } from '../verseBars/selector'

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

export const getMapIsShownVerseCursor = ({
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

export const mapSceneCursorIndex = createSelector(
    mapLyricSongIndex,
    mapVerseCursorIndex,
    (
        lyricSongIndex,
        verseCursorIndex
    ) => getSceneIndexForVerse(
        lyricSongIndex,
        verseCursorIndex
    )
)

export const getMapIsSceneCursor = sceneIndex => createSelector(
    mapSceneCursorIndex,
    sceneCursorIndex => sceneIndex === sceneCursorIndex
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

export const mapCursorTime = createSelector(
    mapLyricSongIndex,
    mapActivatedVerseIndex,
    mapSliderVerseIndex,
    mapSelectedTime,
    (
        lyricSongIndex,
        activatedVerseIndex,
        sliderVerseIndex,
        selectedTime
    ) => getCursorTime({
        lyricSongIndex,
        activatedVerseIndex,
        sliderVerseIndex,
        selectedTime
    })
)
