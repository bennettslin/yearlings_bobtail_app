// Keep these in a single file for dev clarity, at least for now.

import {
    getIndexFromStorage,
    getDotsFromStorage,
    getBoolFromStorage,
    getOptionFromStorage
} from './storageHelper'

import { SHOWN } from 'constants/options'
import { DEVICE_OBJECTS } from 'constants/responsive'

import { getCubesForKey } from 'scene/cubes'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

import {
    getSceneIndexForVerseIndex,
    getScene
} from 'album/api/scenes'
import { getStartTimeForVerseIndex } from 'album/api/time'
import {
    getSongIsLogue,
    getBookForSongIndex
} from 'album/api/songs'
import { getAnnotationColumnIndex } from 'album/api/annotations'

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
    earColumnIndex = getAnnotationColumnIndex(
        storedSongIndex,
        storedAnnotationIndex
    ),
    storedSceneIndex = getSceneIndexForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    )

export const ACCESS_DEFAULTS = {
    accessedKey: '',
    accessedAnnotationIndex: storedAnnotationIndex || 1,
    accessedWikiWormholeIndex: 1,
    accessedDotIndex: 0,
    accessedNavSongIndex: storedSongIndex
}

export const ANNOTATION_DEFAULTS = {
    queuedAnnotationIndex: 0,
    queuedAnnotationFromCarousel: false,
    queuedAnnotationFromLyricVerse: false
}

export const AUDIO_DEFAULTS = {
    isPlaying: false,
    queuedTogglePlay: false,
    queuedPlayFromLogue: false,
    queuedPlaySongIndex: -1,
    queuedPlayVerseIndex: -1
}

export const CHANGE_DEFAULTS = {
    isSceneChangeScrollExitDone: true,

    isSongSelectInFlux: false,

    isSongChangeCarouselExitDone: true,
    isSongChangeLyricExitDone: true,
    isSongChangeCurtainExitDone: true,

    isSongDonePreparing: true
}

export const CURTAIN_DEFAULTS = {
    isCurtainClosing: false,
    isCurtainClosed: false,
    isCurtainOpening: false,
    isCurtainOpened: false
}

export const DEVICE_DEFAULTS = {
    canTheatreEnter: false,
    deviceIndex: DEVICE_OBJECTS.length - 1,
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
}

/**
 * All dotKeys plus dotsBitNumber. Components only ever retrieve the bit
 * number. The individual dots are never used, just visible in the store
 * for dev clarity.
 */
export const DOTS_DEFAULTS = getDotsFromStorage()

export const FOCUS_DEFAULTS = {
    queuedFocus: false
}

export const LOAD_DEFAULTS = {
    appMounted: false,
    isScoreLoaded: false
}

export const LYRIC_DEFAULTS = {
    canLyricEnter: false,
    canLyricUpdate: false,

    lyricSongIndex: storedSongIndex,
    lyricAnnotationIndex: storedAnnotationIndex,
    lyricVerseIndex: storedVerseIndex,
    isRenderedLogue: isStoredLogue
}

export const OPTION_DEFAULTS = {
    selectedOverviewOption:
        getOptionFromStorage(SELECTED_OVERVIEW_OPTION) || SHOWN,
    selectedTipsOption:
        getOptionFromStorage(SELECTED_TIPS_OPTION) || SHOWN,
    isForcedShownOverview: false,
    isSongShownOverview: false,
    isSongShownTips: false
}

/**
 * Plus each individual player. Only the bit number is retrieved by the
 * components. The individual players are just stored for dev clarity.
 */
export const PLAYERS_DEFAULTS = {
    playersBitNumber: 0,
    nextPlayerToRender: -1
}

export const RENDER_DEFAULTS = {
    didTheatreEnter: false,
    didSceneEnter: false,
    didLyricEnter: false,
    didCarouselEnter: false,

    didLyricUpdate: false,
    didCarouselUpdate: false
}

export const RESPONSIVE_DEFAULTS = {
    isHeightlessLyric: false,
    isUnrenderableCarouselNav: false,
    isMobileWiki: false,
    isScoresTipsInMain: false,
    isTwoRowMenu: false,
    showShrunkNavIcon: false,
    showSingleNavBook: false,
    isLyricExpandable: false,
    isScoreShowable: true
}

const {
        cubes: sceneCubesKey,
        sky: {
            time: sceneTime = TIME_ANYTIME,
            season: sceneSeason = SEASON_INDOOR
        },
        layers: scenePresenceLayers
    } = getScene(
        storedSongIndex,
        storedSceneIndex
    ),
    sceneCubes = getCubesForKey(sceneCubesKey)

export const SCENE_DEFAULTS = {
    canSceneEnter: false,
    sceneCubesKey,
    sceneTime,
    sceneSeason,
    sceneSongIndex: storedSongIndex,
    sceneSceneIndex: storedSceneIndex,

    /**
     * Stored only for dev clarity. Components will retrieve these layers
     * through indices to avoid unnecessary updates.
     */
    scenePresenceLayers,
    sceneCubes
}

export const SCROLL_CAROUSEL_DEFAULTS = {
    queuedScrollCarouselLog: '',
    queuedScrollCarouselIndex: 0,
    queuedScrollCarouselFromRender: false
}

export const SCROLL_LYRIC_DEFAULTS = {
    queuedScrollLyricLog: '',
    queuedScrollLyricByVerse: false,
    queuedScrollLyricIndex: -1,
    queuedScrollLyricAlways: false,
    queuedScrollLyricFromRender: false,
    queuedScrollLyricFromAutoScroll: false,
    queuedSceneChangeExitScrollCallback: false
}

export const SELECTED_DEFAULTS = {
    [SELECTED_SONG_INDEX]: storedSongIndex,
    [SELECTED_ANNOTATION_INDEX]: storedAnnotationIndex,
    [SELECTED_VERSE_INDEX]: storedVerseIndex,
    selectedSceneIndex: storedSceneIndex,
    isSelectedLogue: isStoredLogue,
    selectedTime: getStartTimeForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    ),
    earColumnIndex: earColumnIndex || 0
}

export const SESSION_DEFAULTS = {
    carouselAnnotationIndex: 0,
    interactivatedVerseIndex: -1,
    shownNavBookIndex: getBookForSongIndex(storedSongIndex),
    selectedAudioOptionIndex:
        getIndexFromStorage(SELECTED_AUDIO_OPTION_INDEX),
    selectedWikiIndex: 0,
    selectedWikiUrl: ''
}

export const SLIDER_DEFAULTS = {
    isSliderMoving: false,
    isSliderTouched: false,
    sliderLeft: 0,
    sliderWidth: 0,
    sliderVerseIndex: -1,
    sliderTime: 0
}

export const TOGGLE_DEFAULTS = {
    isAccessOn: getBoolFromStorage(IS_ACCESS_ON) || false,
    isAdminOn: getBoolFromStorage(IS_ADMIN_ON) || false,
    isAutoScroll: true,
    isCarouselShown: getBoolFromStorage(IS_CAROUSEL_SHOWN) || false,
    isDotsSlideShown: false,
    isLyricExpanded: false,
    isScoreShown: false,
    isTitleShown: false
}

export const TRANSIENT_DEFAULTS = {
    isCarouselNavShowable: false,
    isOverlayingAnnotation: false,
    isOverlayShown: false,
    isEarShown: false,
    isPopupAnnotationVisible: false,
    popupAnnotationIndex: storedAnnotationIndex,
    toggleShowsOverviewImmediately: false,
    toggleShowsTipsImmediately: false
}

export const VERSE_BARS_DEFAULTS = {
    isVerseBarAbove: false,
    isVerseBarBelow: false,
    queuedDetermineVerseBars: false,
    queuedVerseBarsTimeout: 0
}
