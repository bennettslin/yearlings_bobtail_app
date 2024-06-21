import { combineReducers } from 'redux'
import { getAccessReducer } from './access/reducer'
import ActivatedReducer from './activated/reducer'
import AnnotationReducer from './annotation/reducer'
import AudioReducer from './audio/reducer'
import BannerReducer from './banner/reducer'
import { getDotsReducer } from './dots/reducer'
import DotsSlideReducer from './dotsSlide/reducer'
import EntranceReducer from './entrance/reducer'
import ErrorReducer from './error/reducer'
import FocusReducer from './focus/reducer'
import HoverReducer from './hover/reducer'
import { getLyricReducer } from './lyric/reducer'
import { getOptionReducer } from './option/reducer'
import PlayersReducer from './players/reducer'
import { getPromoReducer } from './promo/reducer'
import { getSceneReducer } from './scene/reducer'
import ScrollCarouselReducer from './scrollCarousel/reducer'
import ScrollLyricReducer from './scrollLyric/reducer'
import { getSelectedReducer } from './selected/reducer'
import { getSessionReducer } from './session/reducer'
import SliderReducer from './slider/reducer'
import { getToggleReducer } from './toggle/reducer'
import VerseBarsReducer from './verseBars/reducer'
import { getViewportReducer } from './viewport/reducer'

import {
    ACCESS_STORE,
    ACTIVATED_STORE,
    ANNOTATION_STORE,
    AUDIO_STORE,
    BANNER_STORE,
    DOTS_STORE,
    DOTS_SLIDE_STORE,
    ENTRANCE_STORE,
    ERROR_STORE,
    FOCUS_STORE,
    HOVER_STORE,
    LYRIC_STORE,
    OPTION_STORE,
    PLAYERS_STORE,
    PROMO_STORE,
    SCENE_STORE,
    SCROLL_CAROUSEL_STORE,
    SCROLL_LYRIC_STORE,
    SELECTED_STORE,
    SESSION_STORE,
    SLIDER_STORE,
    TOGGLE_STORE,
    VERSE_BARS_STORE,
    VIEWPORT_STORE,
} from '../constants/store'
import {
    getInitialAlbumIndices,
    getInitialPitchIndex,
    getInitialPromoPageKey,
} from '../utils/gatsby/initial'
import { PITCH_KEYS } from '../constants/routing'

const getInitialPitchIndices = pathname => (
    Object.fromEntries(
        PITCH_KEYS.map(pitchKey => [
            pitchKey,
            getInitialPitchIndex(pitchKey, pathname),
        ]),
    )
)

export const getAlbumReducers = ({
    windowHeight,
    windowWidth,
    pathname,
    search,
    isAdminPageWithStore,
}) => {
    const {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex,
    } = getInitialAlbumIndices(pathname, search)

    return combineReducers({
        // These are still needed by admin pages.
        [ACCESS_STORE]: getAccessReducer({ initialAnnotationIndex }),
        [ACTIVATED_STORE]: ActivatedReducer,
        [DOTS_STORE]: getDotsReducer(initialAnnotationIndex),
        [LYRIC_STORE]: getLyricReducer({
            initialSongIndex,
            initialVerseIndex,
            initialAnnotationIndex,
        }),
        [SELECTED_STORE]: getSelectedReducer({
            initialSongIndex,
            initialVerseIndex,
            initialAnnotationIndex,
        }),
        [SLIDER_STORE]: SliderReducer,
        [TOGGLE_STORE]: getToggleReducer(),

        // These are not needed by admin pages.
        ...!isAdminPageWithStore && {
            [ANNOTATION_STORE]: AnnotationReducer,
            [AUDIO_STORE]: AudioReducer,
            [BANNER_STORE]: BannerReducer,
            [DOTS_SLIDE_STORE]: DotsSlideReducer,
            [ENTRANCE_STORE]: EntranceReducer,
            [ERROR_STORE]: ErrorReducer,
            [FOCUS_STORE]: FocusReducer,
            [HOVER_STORE]: HoverReducer,
            [OPTION_STORE]: getOptionReducer({
                initialSongIndex,
                initialAnnotationIndex,
            }),
            [PLAYERS_STORE]: PlayersReducer,
            [PROMO_STORE]: getPromoReducer({
                initialPitchIndices: getInitialPitchIndices(pathname),
            }),
            [SCENE_STORE]: getSceneReducer({
                initialSongIndex,
                initialVerseIndex,
            }),
            [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
            [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
            [SESSION_STORE]: getSessionReducer({
                initialSongIndex,
                initialAnnotationIndex,
            }),
            [VERSE_BARS_STORE]: VerseBarsReducer,
            [VIEWPORT_STORE]: getViewportReducer({
                windowHeight,
                windowWidth,
            }),
        },
    })
}

export const getPromoReducers = ({
    windowHeight,
    windowWidth,
    pathname,

}) => combineReducers({
    [ACCESS_STORE]: getAccessReducer({ isPromoPage: true }),
    [PROMO_STORE]: getPromoReducer({
        initialPitchIndices: getInitialPitchIndices(pathname),
        initialPromoPage: getInitialPromoPageKey(pathname),
    }),
    [SELECTED_STORE]: getSelectedReducer({
        isPromoPage: true,
    }),
    [SESSION_STORE]: getSessionReducer({ isPromoPage: true }),
    [TOGGLE_STORE]: getToggleReducer({ isPromoPage: true }),
    [VIEWPORT_STORE]: getViewportReducer({
        windowHeight,
        windowWidth,
        isPromoPage: true,
    }),
})
