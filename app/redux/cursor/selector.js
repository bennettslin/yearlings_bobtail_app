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
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedTime
} from '../selected/selector'
import { mapSliderVerseIndex } from '../slider/selector'
import { mapIsEitherVerseBarShown } from '../verseBars/selector'

export const mapVerseCursorIndex = createSelector(
    mapSliderVerseIndex,
    mapActivatedVerseIndex,
    mapSelectedVerseIndex,
    (
        sliderVerseIndex,
        activatedVerseIndex,
        selectedVerseIndex
    ) => getCursorIndex(
        sliderVerseIndex,
        activatedVerseIndex,
        selectedVerseIndex
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
    mapSelectedSongIndex,
    mapVerseCursorIndex,
    (
        selectedSongIndex,
        verseCursorIndex
    ) => getSceneIndexForVerse(
        selectedSongIndex,
        verseCursorIndex
    )
)

export const getMapIsSceneCursor = sceneIndex => createSelector(
    mapSceneCursorIndex,
    sceneCursorIndex => sceneIndex === sceneCursorIndex
)

export const getMapIsStanzaCursor = stanzaIndex => createSelector(
    mapSelectedSongIndex,
    mapVerseCursorIndex,
    (
        selectedSongIndex,
        verseCursorIndex
    ) => (
        stanzaIndex === getStanzaIndexForVerse(
            selectedSongIndex,
            verseCursorIndex
        )
    )
)

export const mapCursorTime = createSelector(
    mapSelectedSongIndex,
    mapActivatedVerseIndex,
    mapSliderVerseIndex,
    mapSelectedTime,
    (
        selectedSongIndex,
        activatedVerseIndex,
        sliderVerseIndex,
        selectedTime
    ) => getCursorTime({
        selectedSongIndex,
        activatedVerseIndex,
        sliderVerseIndex,
        selectedTime
    })
)
