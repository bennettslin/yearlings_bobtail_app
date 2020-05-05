// Keep these in a single file for dev clarity, at least for now.

import {
    getIndexFromStorage,
    getDotsFromStorage,
    getOptionFromStorage,
    getEmptyDotsStore
} from './storageHelper'

import { SHOWN } from 'constants/options'
import { DEVICE_WIDTH_CONFIGS } from 'constants/responsive/deviceWidth'

import { getCubesForKey } from 'scene/arrangements/cubes'

import {
    TIME_STAGE,
    SEASON_STAGE
} from 'scene/sky/keys'

import { getScene } from '../album/api/scenes'
import { getStartTimeForVerseIndex } from '../album/api/time'
import { getSceneIndexForVerseIndex } from '../album/api/verses'
import {
    getSongIsLogue,
    getBookForSongIndex
} from '../album/api/songs'
import { getAnnotationColumnIndex } from '../album/api/annotations'

import { getBoolFromStorage } from '../utils/window'

import {
    IS_ACCESS_ON,
    IS_CAROUSEL_SHOWN,

    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,

    SELECTED_AUDIO_OPTION_INDEX,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION,

    PROSCENIUM_STORE,
    STAGE_STORE,
    THEATRE_STORE
} from './storeKeys'

/**
 * Transition values. Kept together up here for dev clarity.
 */
export const VIEWPORT_TRANSITION_DEFAULTS = {
    canTheatreEnter: false,
    didTheatreEnter: false
}
const LYRIC_TRANSITION_DEFAULTS = {
    didCarouselExit: true,
    didLyricExit: true,
    didCurtainExit: true,

    canLyricCarouselUpdate: false,
    didLyricUpdate: false,
    didCarouselUpdate: false,

    canLyricCarouselEnter: false,
    didLyricEnter: false,
    didCarouselEnter: false,
    didCurtainEnter: false
}
const SCENE_TRANSITION_DEFAULTS = {
    didSceneScrollExit: true,

    canSceneUpdate: false,
    didSceneUpdate: false,

    canSceneEnter: false,
    didSceneEnter: false
}
const SELECTED_TRANSITION_DEFAULTS = {
    isSongSelectInFlux: false
}

const
    storedAnnotationIndex = getIndexFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getIndexFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getIndexFromStorage(SELECTED_VERSE_INDEX),
    isStoredLogue = getSongIsLogue(storedSongIndex),
    storedEarColumnIndex = getAnnotationColumnIndex(
        storedSongIndex,
        storedAnnotationIndex
    ),
    storedSceneIndex = getSceneIndexForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    )

export const ACCESS_DOT_DEFAULTS = {
    accessedDotIndex: -1
}

export const ACCESS_NAV_DEFAULTS = {
    accessedNavIndex: -1
}

export const ACCESS_DEFAULTS = {
    ...ACCESS_DOT_DEFAULTS,
    ...ACCESS_NAV_DEFAULTS,
    isAccessOn: getBoolFromStorage(IS_ACCESS_ON) || false,
    isAccessedIndexedAnchorShown: false,
    accessedKey: '',
    accessedAnnotationIndex: storedAnnotationIndex || 0,
    accessedWikiWormholeIndex: 0
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

export const BANNER_DEFAULTS = {
    isBannerMoving: false
}

/**
 * All dotKeys plus dotsBitNumber. Components only ever retrieve the bit
 * number. The individual dots are never used, just visible in the store
 * for dev clarity.
 */
export const DOTS_DEFAULTS = getDotsFromStorage()
export const DOTS_SLIDE_DEFAULTS = getEmptyDotsStore()

export const FOCUS_DEFAULTS = {
    queuedFocus: false
}

export const LOAD_DEFAULTS = {
    isScoreLoaded: false
}

export const LYRIC_DEFAULTS = {
    ...LYRIC_TRANSITION_DEFAULTS,
    lyricSongIndex: storedSongIndex,
    lyricAnnotationIndex: storedAnnotationIndex,
    lyricVerseIndex: storedVerseIndex,
    isLyricLogue: isStoredLogue
}

export const MOUNT_DEFAULTS = {
    canCarouselMount: false,
    canScoreMount: false,
    canSliderMount: false,
    lyricDynamicHeight: 0
}

export const OPTION_DEFAULTS = {
    isLogueOverviewShown: isStoredLogue,
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

export const RESPONSIVE_DEFAULTS = {
    isHeightlessLyric: false,
    isMobileWiki: false,
    isSmallBannerText: false,
    isTwoRowMenu: false,
    menuHeight: 0,
    showShrunkNavIcon: false,
    showSingleNavBook: false,
    isLyricExpandable: false
}

// Begin in default stage scene.
const initialSceneIndex = -1,
    {
        cubes: sceneCubesKey,
        sky: {
            time: sceneTime = TIME_STAGE,
            season: sceneSeason = SEASON_STAGE
        },
        layers: scenePresenceLayers
    } = getScene(
        storedSongIndex,
        initialSceneIndex
    ),
    sceneCubes = getCubesForKey(sceneCubesKey)

export const SCENE_DEFAULTS = {
    ...SCENE_TRANSITION_DEFAULTS,
    sceneCubesKey,
    sceneTime,
    sceneSeason,
    sceneSongIndex: storedSongIndex,
    sceneSceneIndex: initialSceneIndex,
    sceneCubes,

    /**
     * Stored only for dev clarity. Components will retrieve these layers
     * through indices to avoid unnecessary updates.
     */
    scenePresenceLayers
}

export const SCROLL_CAROUSEL_DEFAULTS = {
    queuedScrollCarouselLog: '',
    queuedScrollCarouselIndex: 1,
    queuedScrollCarouselNoDuration: false
}

export const SCROLL_LYRIC_DEFAULTS = {
    queuedScrollLyricLog: '',
    queuedScrollLyricByVerse: false,
    queuedScrollLyricIndex: -1,
    queuedScrollLyricAlways: false,
    queuedScrollLyricNoDuration: false,
    queuedScrollLyricFromAutoScroll: false,
    queuedSceneChangeExitScrollCallback: false
}

export const SCROLL_OVERLAY_DEFAULTS = {
    isScrolling: false,
    lyricScrollTop: 0
}

const storedTime = getStartTimeForVerseIndex(
    storedSongIndex,
    storedVerseIndex
)

export const SELECTED_DEFAULTS = {
    ...SELECTED_TRANSITION_DEFAULTS,
    selectedSongIndex: storedSongIndex,
    selectedAnnotationIndex: storedAnnotationIndex,
    selectedVerseIndex: storedVerseIndex,
    selectedSceneIndex: storedSceneIndex,
    isRoutingComplete: false,
    isSelectedLogue: isStoredLogue,
    selectedTime: storedTime,
    earColumnIndex: storedEarColumnIndex || 0
}

export const ACTIVATED_DEFAULTS = {
    isActivated: false,
    activatedVerseIndex: -1,
    activatedSceneIndex: -1,
    activatedTime: 0
}

export const SESSION_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    carouselAnnotationIndex: 0,
    selectedWikiUrl: ''
}

export const SESSION_DEFAULTS = {
    ...SESSION_WIKI_DEFAULTS,
    shownNavBookIndex: getBookForSongIndex(storedSongIndex),
    selectedAudioOptionIndex:
        getIndexFromStorage(SELECTED_AUDIO_OPTION_INDEX)
}

export const SLIDER_DEFAULTS = {
    sliderLeft: 0,
    sliderWidth: 0,
    isSliderMoving: false,
    isSliderTouched: false,
    sliderVerseIndex: -1,
    sliderSceneIndex: -1,
    sliderTime: 0
}

export const TOGGLE_DEFAULTS = {
    isAutoScroll: true,
    isCarouselShown: getBoolFromStorage(IS_CAROUSEL_SHOWN) || false,
    isNavShown: false,
    isDotsSlideShown: false,
    isLyricExpanded: false,
    isScoreShown: false,
    isAboutShown: false
}

export const TRANSIENT_DEFAULTS = {
    isShelfLeftShown: false,
    isCarouselNavShowable: false,
    isOverlayingAnnotation: false,
    isOverlayShown: false,
    isEarShown: false,
    isTipsShowable: false,
    isPopupAnnotationVisible: false,
    popupAnnotationIndex: storedAnnotationIndex,
    toggleShowsOverviewImmediately: false,
    toggleShowsTipsImmediately: false
}

export const VERSE_BARS_POSITION_DEFAULTS = {
    isVerseBarAbove: false,
    isVerseBarBelow: false
}

export const VERSE_BARS_QUEUE_DEFAULTS = {
    queuedDetermineVerseBars: false,
    queuedVerseBarsTimeout: 0
}

export const VERSE_BARS_DEFAULTS = {
    ...VERSE_BARS_POSITION_DEFAULTS,
    ...VERSE_BARS_QUEUE_DEFAULTS
}

export const PROSCENIUM_DEFAULTS = {
    prosceniumTop: 0,
    prosceniumLeft: 0,
    prosceniumWidth: 100,
    prosceniumHeight: 100
}

export const STAGE_DEFAULTS = {
    stageTop: 0,
    stageLeft: 0,
    stageWidth: 100,
    stageHeight: 100
}

export const THEATRE_DEFAULTS = {
    ceilingHeight: 0,
    floorHeight: 0
}

export const VIEWPORT_DEFAULTS = {
    ...VIEWPORT_TRANSITION_DEFAULTS,
    deviceWidthIndex: DEVICE_WIDTH_CONFIGS.length - 1,
    isPhoneWidth: false,
    isTabletWidth: false,
    isDesktopWidth: false,
    windowHeight: 0,
    windowWidth: 0,

    [PROSCENIUM_STORE]: PROSCENIUM_DEFAULTS,
    [STAGE_STORE]: STAGE_DEFAULTS,
    [THEATRE_STORE]: THEATRE_DEFAULTS
}
