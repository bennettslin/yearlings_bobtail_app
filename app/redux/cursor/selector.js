import { createSelector } from 'reselect'
import {
    getStanzaIndexForVerse,
    getSceneIndexForVerse,
} from '../../api/album/verses'
import {
    getCursorIndex,
    getCursorTime,
    getSongCursorTime,
    getIsVerseCursor,
} from '../../helpers/cursor'
import { mapActivatedVerseIndex } from '../activated/selector'
import { mapIsPlaying } from '../audio/selector'
import { mapBannerHoverTime } from '../banner/selector'
import { mapCanTransitionAfterSongChange } from '../entrance/selector'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
} from '../lyric/selector'
import { mapSliderVerseIndex } from '../slider/selector'
import { mapIsEitherVerseBarShown } from '../verseBars/selector'

export const getMapVerseCursorIndex = inVerseBar => createSelector(
    mapCanTransitionAfterSongChange,
    mapSliderVerseIndex,
    mapActivatedVerseIndex,
    mapLyricVerseIndex,
    (
        canTransitionAfterSongChange,
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex,
    ) => getCursorIndex(
        // Verse bar always shows indexed verse even if song is changing.
        inVerseBar || canTransitionAfterSongChange,
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex,
    ),
)

export const getMapIsShownVerseCursor = ({
    verseIndex,
    inSlider,
    inVerseBar,
}) => createSelector(
    getMapVerseCursorIndex(),
    mapIsEitherVerseBarShown,
    (
        verseCursorIndex,
        isEitherVerseBarShown,
    ) => getIsVerseCursor({
        verseIndex,
        verseCursorIndex,
        inSlider,
        inVerseBar,
        isEitherVerseBarShown,
    }),
)

export const mapSceneCursorIndex = createSelector(
    mapLyricSongIndex,
    getMapVerseCursorIndex(),
    (
        mapLyricSongIndex,
        verseCursorIndex,
    ) => getSceneIndexForVerse(
        mapLyricSongIndex,
        verseCursorIndex,
    ),
)

export const getMapIsSceneCursor = sceneIndex => createSelector(
    mapSceneCursorIndex,
    (
        sceneCursorIndex,
    ) => sceneIndex === sceneCursorIndex,
)

export const getMapIsStanzaCursor = stanzaIndex => createSelector(
    mapLyricSongIndex,
    getMapVerseCursorIndex(),
    (
        mapLyricSongIndex,
        verseCursorIndex,
    ) => (
        stanzaIndex === getStanzaIndexForVerse(
            mapLyricSongIndex,
            verseCursorIndex,
        )
    ),
)

export const mapCursorTime = createSelector(
    mapLyricSongIndex,
    getMapVerseCursorIndex(),
    (
        lyricSongIndex,
        verseCursorIndex,
    ) => getCursorTime(
        lyricSongIndex,
        verseCursorIndex,
    ),
)

export const getMapSongCursorTime = audioTime => createSelector(
    mapCanTransitionAfterSongChange,
    mapBannerHoverTime,
    mapCursorTime,
    mapIsPlaying,
    (
        canTransitionAfterSongChange,
        bannerHoverTime,
        cursorTime,
        isPlaying,
    ) => getSongCursorTime({
        canTransitionAfterSongChange,
        bannerHoverTime,
        cursorTime,
        audioTime,
        isPlaying,
    }),
)
