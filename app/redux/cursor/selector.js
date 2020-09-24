import { createSelector } from 'reselect'
import {
    getStanzaIndexForVerse,
    getSceneIndexForVerse
} from '../../api/album/verses'
import {
    getCursorIndex,
    getCursorTime,
    getSongCursorTime,
    getIsVerseCursor
} from '../../helpers/cursor'
import { mapActivatedVerseIndex } from '../activated/selector'
import { mapIsPlaying } from '../audio/selector'
import { mapBannerHoverTime } from '../banner/selector'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex
} from '../lyric/selector'
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
        mapLyricSongIndex,
        verseCursorIndex
    ) => getSceneIndexForVerse(
        mapLyricSongIndex,
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
        mapLyricSongIndex,
        verseCursorIndex
    ) => (
        stanzaIndex === getStanzaIndexForVerse(
            mapLyricSongIndex,
            verseCursorIndex
        )
    )
)

export const mapCursorTime = createSelector(
    mapLyricSongIndex,
    mapVerseCursorIndex,
    (
        lyricSongIndex,
        verseCursorIndex
    ) => getCursorTime(
        lyricSongIndex,
        verseCursorIndex
    )
)

export const getMapSongCursorTime = playerTime => createSelector(
    mapBannerHoverTime,
    mapCursorTime,
    mapIsPlaying,
    (
        bannerHoverTime,
        cursorTime,
        isPlaying
    ) => getSongCursorTime({
        bannerHoverTime,
        cursorTime,
        playerTime,
        isPlaying
    })
)
