// Keep these in a single file for clarity, at least for now.

import {
    getIndexFromStorage,
    getDotsFromStorage,
    getBoolFromStorage,
    getOptionFromStorage
} from './storageHelper'

import { SHOWN } from 'constants/options'

import {
    getSongIsLogue,
    getSceneIndexForVerseIndex,
    getTimeForVerseIndex,
    getEarColumnForAnnotation
} from '../helpers/data'

import {
    IS_ACCESS_ON,
    IS_ADMIN_ON,
    IS_CAROUSEL_SHOWN,

    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,

    SELECTED_AUDIO_OPTION_INDEX,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from './storeKeys'

const
    storedAnnotationIndex = getIndexFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getIndexFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getIndexFromStorage(SELECTED_VERSE_INDEX),
    isStoredLogue = getSongIsLogue(storedSongIndex),
    earColumnIndex = getEarColumnForAnnotation(
        storedSongIndex,
        storedAnnotationIndex
    ),

    ACCESS_DEFAULTS = {
        accessedKey: '',
        accessedAnnotationIndex: storedAnnotationIndex || 1,
        accessedWikiWormholeIndex: 1,
        accessedDotIndex: 0,
        accessedNavSongIndex: storedSongIndex
    },

    AUDIO_DEFAULTS = {
        isPlaying: false,
        canPlayThroughs: 0
    },

    DEVICE_DEFAULTS = {
        deviceIndex: 0,
        isPhone: false,
        isDesktop: false,
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

    LOAD_DEFAULTS = {
        appMounted: false,
        isScoreLoaded: false
    },

    OPTION_DEFAULTS = {
        selectedOverviewOption:
            getOptionFromStorage(SELECTED_OVERVIEW_OPTION) || SHOWN,
        selectedTipsOption:
            getOptionFromStorage(SELECTED_TIPS_OPTION) || SHOWN,
        isForcedShownOverview: false,
        isSongShownOverview: false,
        isSongShownTips: false
    },

    PLAYER_DEFAULTS = {
        queuedPlayerSongIndex: -1,
        queuedPlayerVerseIndex: -1
    },

    RENDER_DEFAULTS = {
        canTheatreRender: false,
        canMainRender: false,
        canVerseRender: false,
        canLyricRender: false,
        canCarouselRender: false,
        canSceneRender: false,

        didTheatreRender: false,
        didMainRender: false,
        didVerseRender: false,
        didLyricRender: false,
        didCarouselRender: false,
        didSceneRender: false
    },

    RENDERABLE_DEFAULTS = {
        isSceneChangeRenderable: true,
        isSongChangeRenderable: false,
        isWindowResizeRenderable: false
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

    SCROLL_CAROUSEL_DEFAULTS = {
        queuedScrollCarouselLog: '',
        queuedScrollCarouselIndex: 0,
        queuedScrollCarouselImmediately: false
    },

    SCROLL_LYRIC_DEFAULTS = {
        queuedScrollLyricLog: '',
        queuedScrollLyricByVerse: false,
        queuedScrollLyricIndex: 0,
        queuedScrollLyricImmediately: false
    },

    SESSION_DEFAULTS = {
        carouselAnnotationIndex: 0,
        interactivatedVerseIndex: -1,
        shownNavBookIndex: 1,
        selectedAudioOptionIndex:
            getIndexFromStorage(SELECTED_AUDIO_OPTION_INDEX),
        selectedWikiIndex: 0,
        selectedWikiUrl: ''
    },

    SLIDER_DEFAULTS = {
        isSliderMoving: false,
        isSliderTouched: false,
        sliderLeft: 0,
        sliderRatio: 0,
        sliderWidth: 0,
        sliderVerseIndex: -1
    },

    SONG_DEFAULTS = {
        earColumnIndex: earColumnIndex || 0,
        [SELECTED_SONG_INDEX]: storedSongIndex,
        [SELECTED_ANNOTATION_INDEX]: storedAnnotationIndex,
        [SELECTED_VERSE_INDEX]: storedVerseIndex,
        isSelectedLogue: isStoredLogue,
        selectedTime: getTimeForVerseIndex(
            storedSongIndex,
            storedVerseIndex
        )
    },

    TOGGLE_DEFAULTS = {
        isAccessOn: getBoolFromStorage(IS_ACCESS_ON) || false,
        isAdminOn: getBoolFromStorage(IS_ADMIN_ON) || false,
        isAutoScroll: true,
        isCarouselShown: getBoolFromStorage(IS_CAROUSEL_SHOWN) || false,
        isDotsSlideShown: false,
        isLyricExpanded: false,
        isScoreShown: false,
        isTitleShown: false
    },

    TRANSIENT_DEFAULTS = {
        isCarouselNavShowable: false,
        isOverlayingAnnotation: false,
        isOverlayShown: false,
        isEarShown: false,
        isPopupAnnotationVisible: false,
        popupAnnotationIndex: storedAnnotationIndex,
        toggleShowsOverviewImmediately: false,
        toggleShowsTipsImmediately: false
    },

    VERSE_BARS_DEFAULTS = {
        isVerseBarAbove: false,
        isVerseBarBelow: false,
        queuedDetermineVerseBars: false,
        queuedVerseBarsTimeout: 0
    }

export {
    ACCESS_DEFAULTS,
    AUDIO_DEFAULTS,
    DEVICE_DEFAULTS,
    DOTS_DEFAULTS,
    LOAD_DEFAULTS,
    OPTION_DEFAULTS,
    PLAYER_DEFAULTS,
    RENDER_DEFAULTS,
    RENDERABLE_DEFAULTS,
    RENDERED_DEFAULTS,
    RESPONSIVE_DEFAULTS,
    SCROLL_CAROUSEL_DEFAULTS,
    SCROLL_LYRIC_DEFAULTS,
    SESSION_DEFAULTS,
    SLIDER_DEFAULTS,
    SONG_DEFAULTS,
    TOGGLE_DEFAULTS,
    TRANSIENT_DEFAULTS,
    VERSE_BARS_DEFAULTS
}
