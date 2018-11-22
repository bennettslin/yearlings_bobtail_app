import {
    getFromStorage,
    getBoolFromStorage
} from './storageHelper'

import {
    getSongIsLogue,
    getSceneIndexForVerseIndex,
    getTimeForVerseIndex
} from '../helpers/dataHelper'

import {
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX
} from 'constants/state'

import {
    IS_ACCESS_ON,
    IS_ADMIN_ON,
    IS_CAROUSEL_SHOWN
} from './storeKeys'

const
    TOGGLE_DEFAULTS = {
        isAccessOn: getBoolFromStorage(IS_ACCESS_ON) || false,
        isAdminOn: getBoolFromStorage(IS_ADMIN_ON) || false,
        isAutoScroll: true,
        isCarouselShown: getBoolFromStorage(IS_CAROUSEL_SHOWN) || false,
        isDotsSlideShown: false,
        isLyricExpanded: false,
        isScoreShown: false,
        isTitleShown: false,
        isVerseBarAbove: false,
        isVerseBarBelow: false
    },

    TRANSIENT_DEFAULTS = {
        isCarouselNavShowable: false,
        isOverlayShown: false,
        isOverlayingAnnotation: false
    },

    DEVICE_DEFAULTS = {
        deviceIndex: 0,
        windowHeight: 0,
        windowWidth: 0,
        stageTop: 0,
        stageLeft: 0,
        stageWidth: 100,
        stageHeight: 100,
        ceilingHeight: 0,
        floorHeight: 0
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

    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX),
    isStoredLogue = getSongIsLogue(storedSongIndex),

    RENDERED_DEFAULTS = {
        renderedSongIndex: storedSongIndex,
        renderedAnnotationIndex: storedAnnotationIndex,
        renderedVerseIndex: storedVerseIndex,
        isRenderedLogue: isStoredLogue,
        renderedSceneIndex: getSceneIndexForVerseIndex(
            storedSongIndex,
            storedVerseIndex
        )
    },

    SONG_DEFAULTS = {
        [SELECTED_SONG_INDEX]: storedSongIndex,
        [SELECTED_ANNOTATION_INDEX]: storedAnnotationIndex,
        [SELECTED_VERSE_INDEX]: storedVerseIndex,
        isSelectedLogue: isStoredLogue,
        selectedTime: getTimeForVerseIndex(
            storedSongIndex,
            storedVerseIndex
        )
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
    TRANSIENT_DEFAULTS,
    DEVICE_DEFAULTS,
    RESPONSIVE_DEFAULTS,
    RENDERABLE_DEFAULTS,
    RENDER_DEFAULTS,
    RENDERED_DEFAULTS,
    SONG_DEFAULTS,
    SLIDER_DEFAULTS
}
