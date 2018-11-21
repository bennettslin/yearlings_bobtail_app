import { getFromStorage } from './storageHelper'

import {
    getSceneIndexForVerseIndex,
    getTimeForVerseIndex
} from 'helpers/dataHelper'

import {
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_TIME
} from 'constants/state'

const
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX),
    selectedTime = getTimeForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    ),

    TOGGLE_DEFAULTS = {
        isScoreShown: false
    },

    DEVICE_DEFAULTS = {
        deviceIndex: 0,
        windowHeight: 0,
        windowWidth: 0,
        stageCoordinates: {
            top: 0,
            left: 0,
            width: 100,
            height: 100
        }
    },

    RESPONSIVE_DEFAULTS = {
        isHiddenLyric: false,
        isHiddenCarouselNav: false,
        isMobileWiki: false,
        isScoresTipsInMain: false,
        isTwoRowMenu: false,
        showOneOfTwoLyricColumns: false,
        showShrunkNavIcon: false,
        showSingleBookColumn: false,
        isLyricExpandable: false,
        isScoreShowable: true
    },

    RENDERABLE_DEFAULTS = {
        isSceneChangeRenderable: true,
        isSongChangeRenderable: false,
        isWindowResizeRenderable: false
    },

    RENDER_DEFAULTS = {
        canTheatreRender: false,
        canMainRender: false,
        canVerseRender: false,
        canLyricRender: false,
        canCarouselRender: false,
        canSceneRender: false
    },

    RENDERED_DEFAULTS = {
        renderedSongIndex: storedSongIndex,
        renderedAnnotationIndex: storedAnnotationIndex,
        renderedVerseIndex: storedVerseIndex,
        renderedSceneIndex: getSceneIndexForVerseIndex(
            storedSongIndex,
            storedVerseIndex
        )
    },

    SONG_DEFAULTS = {
        [SELECTED_SONG_INDEX]: storedSongIndex,
        [SELECTED_ANNOTATION_INDEX]: storedAnnotationIndex,
        [SELECTED_VERSE_INDEX]: storedVerseIndex,
        [SELECTED_TIME]: selectedTime
    },

    SLIDER_DEFAULTS = {
        isSliderMoving: false,
        isSliderTouched: false,
        sliderLeft: 0,
        sliderRatio: 0,
        sliderWidth: 0,
        sliderVerseIndex: -1
    }

export {
    TOGGLE_DEFAULTS,
    DEVICE_DEFAULTS,
    RESPONSIVE_DEFAULTS,
    RENDERABLE_DEFAULTS,
    RENDER_DEFAULTS,
    RENDERED_DEFAULTS,
    SONG_DEFAULTS,
    SLIDER_DEFAULTS
}
