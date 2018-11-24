// Keep these in a single file for clarity, at least for now.

import {
    getIndexFromStorage,
    getDotsFromStorage,
    getBoolFromStorage
} from './storageHelper'

import {
    getSongIsLogue,
    getSceneIndexForVerseIndex,
    getTimeForVerseIndex
} from '../helpers/dataHelper'

import {
    IS_ACCESS_ON,
    IS_ADMIN_ON,
    IS_CAROUSEL_SHOWN,

    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,

    SELECTED_AUDIO_OPTION_INDEX
} from './storeKeys'

const
    storedAnnotationIndex = getIndexFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getIndexFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getIndexFromStorage(SELECTED_VERSE_INDEX),
    isStoredLogue = getSongIsLogue(storedSongIndex),

    ACCESS_DEFAULTS = {
        accessedKey: '',
        accessedAnnotationIndex: storedAnnotationIndex,
        accessedAnnotationAnchorIndex: 1,
        accessedDotIndex: 0,
        accessedNavSongIndex: storedSongIndex
    },

    AUDIO_DEFAULTS = {
        isPlaying: false,
        canPlayThroughs: 0
    },

    LOAD_DEFAULTS = {
        appMounted: false,
        isScoreLoaded: false
    },

    SESSION_DEFAULTS = {
        carouselAnnotationIndex: 0,
        interactivatedVerseIndex: -1,
        shownNavBookIndex: 1,
        selectedAudioOptionIndex:
            getIndexFromStorage(SELECTED_AUDIO_OPTION_INDEX),
        selectedLyricColumnIndex: 0,
        selectedOverviewIndex: 1,
        selectedTipsIndex: 1,
        selectedWikiIndex: 0,
        selectedWikiUrl: ''
    },

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
        isOverlayingAnnotation: false,
        isOverlayShown: false,
        isDoublespeakerShown: false
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

    // All dotKeys plus dotsBitNumber.
    DOTS_DEFAULTS = getDotsFromStorage(),

    RESPONSIVE_DEFAULTS = {
        isHiddenLyric: false,
        isHiddenCarouselNav: false,
        isMobileWiki: false,
        isScoresTipsInMain: false,
        isTwoRowMenu: false,
        showShrunkNavIcon: false,
        showSingleNavBook: false,
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
    ACCESS_DEFAULTS,
    AUDIO_DEFAULTS,
    LOAD_DEFAULTS,
    SESSION_DEFAULTS,
    TOGGLE_DEFAULTS,
    TRANSIENT_DEFAULTS,
    DEVICE_DEFAULTS,
    DOTS_DEFAULTS,
    RESPONSIVE_DEFAULTS,
    RENDERABLE_DEFAULTS,
    RENDER_DEFAULTS,
    RENDERED_DEFAULTS,
    SONG_DEFAULTS,
    SLIDER_DEFAULTS
}
