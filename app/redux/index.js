import { combineReducers } from 'redux'
import { getAccessReducer, AccessPitchPageReducer } from './access/reducer'
import ActivatedReducer from './activated/reducer'
import AnnotationReducer from './annotation/reducer'
import AudioReducer from './audio/reducer'
import BannerReducer from './banner/reducer'
import { getDotsReducer } from './dots/reducer'
import DotsSlideReducer from './dotsSlide/reducer'
import EntranceReducer from './entrance/reducer'
import FocusReducer from './focus/reducer'
import HoverReducer from './hover/reducer'
import { getLyricReducer } from './lyric/reducer'
import { getOptionReducer } from './option/reducer'
import PitchReducer from './pitch/reducer'
import PlayersReducer from './players/reducer'
import { getSceneReducer } from './scene/reducer'
import ScrollCarouselReducer from './scrollCarousel/reducer'
import ScrollLyricReducer from './scrollLyric/reducer'
import { getSelectedReducer } from './selected/reducer'
import { getSessionReducer } from './session/reducer'
import SliderReducer from './slider/reducer'
import ToggleReducer from './toggle/reducer'
import VerseBarsReducer from './verseBars/reducer'
import ViewportReducer, { ViewportPitchPageReducer } from './viewport/reducer'

import {
    ACCESS_STORE,
    ACTIVATED_STORE,
    ANNOTATION_STORE,
    AUDIO_STORE,
    BANNER_STORE,
    DOTS_STORE,
    DOTS_SLIDE_STORE,
    ENTRANCE_STORE,
    FOCUS_STORE,
    HOVER_STORE,
    LYRIC_STORE,
    OPTION_STORE,
    PITCH_STORE,
    PLAYERS_STORE,
    SCENE_STORE,
    SCROLL_CAROUSEL_STORE,
    SCROLL_LYRIC_STORE,
    SELECTED_STORE,
    SESSION_STORE,
    SLIDER_STORE,
    TOGGLE_STORE,
    VERSE_BARS_STORE,
    VIEWPORT_STORE
} from '../constants/store'

export const getAlbumReducers = songIndex => combineReducers({
    [ACCESS_STORE]: getAccessReducer(songIndex),
    [ACTIVATED_STORE]: ActivatedReducer,
    [ANNOTATION_STORE]: AnnotationReducer,
    [AUDIO_STORE]: AudioReducer,
    [BANNER_STORE]: BannerReducer,
    [DOTS_STORE]: getDotsReducer(songIndex),
    [DOTS_SLIDE_STORE]: DotsSlideReducer,
    [ENTRANCE_STORE]: EntranceReducer,
    [FOCUS_STORE]: FocusReducer,
    [HOVER_STORE]: HoverReducer,
    [LYRIC_STORE]: getLyricReducer(songIndex),
    [OPTION_STORE]: getOptionReducer(songIndex),
    [PITCH_STORE]: PitchReducer,
    [PLAYERS_STORE]: PlayersReducer,
    [SCENE_STORE]: getSceneReducer(songIndex),
    [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
    [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
    [SELECTED_STORE]: getSelectedReducer(songIndex),
    [SESSION_STORE]: getSessionReducer(songIndex),
    [SLIDER_STORE]: SliderReducer,
    [TOGGLE_STORE]: ToggleReducer,
    [VERSE_BARS_STORE]: VerseBarsReducer,
    [VIEWPORT_STORE]: ViewportReducer
})

export const getPitchReducers = () => combineReducers({
    [DOTS_STORE]: getDotsReducer(0),
    [ACCESS_STORE]: AccessPitchPageReducer,
    [PITCH_STORE]: PitchReducer,
    [VIEWPORT_STORE]: ViewportPitchPageReducer
})
