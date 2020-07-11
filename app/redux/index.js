import { combineReducers } from 'redux'
import AccessReducer, { getAccessReducer } from './access/reducer'
import ActivatedReducer from './activated/reducer'
import AnnotationReducer from './annotation/reducer'
import AudioReducer from './audio/reducer'
import BannerReducer from './banner/reducer'
import DotsReducer, { getDotsReducer } from './dots/reducer'
import DotsSlideReducer from './dotsSlide/reducer'
import EntranceReducer from './entrance/reducer'
import FocusReducer from './focus/reducer'
import HoverReducer from './hover/reducer'
import LyricReducer, { getLyricReducer } from './lyric/reducer'
import MountReducer from './mount/reducer'
import OptionReducer, { getOptionReducer } from './option/reducer'
import PlayersReducer from './players/reducer'
import SceneReducer, { getSceneReducer } from './scene/reducer'
import ScrollCarouselReducer from './scrollCarousel/reducer'
import ScrollLyricReducer from './scrollLyric/reducer'
import SelectedReducer, { getSelectedReducer } from './selected/reducer'
import SessionReducer, { getSessionReducer } from './session/reducer'
import SliderReducer from './slider/reducer'
import ToggleReducer from './toggle/reducer'
import VerseBarsReducer from './verseBars/reducer'
import ViewportReducer from './viewport/reducer'

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
    MOUNT_STORE,
    OPTION_STORE,
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

export default combineReducers({
    [ACCESS_STORE]: AccessReducer,
    [ACTIVATED_STORE]: ActivatedReducer,
    [ANNOTATION_STORE]: AnnotationReducer,
    [AUDIO_STORE]: AudioReducer,
    [BANNER_STORE]: BannerReducer,
    [DOTS_STORE]: DotsReducer,
    [DOTS_SLIDE_STORE]: DotsSlideReducer,
    [ENTRANCE_STORE]: EntranceReducer,
    [FOCUS_STORE]: FocusReducer,
    [HOVER_STORE]: HoverReducer,
    [LYRIC_STORE]: LyricReducer,
    [MOUNT_STORE]: MountReducer,
    [OPTION_STORE]: OptionReducer,
    [PLAYERS_STORE]: PlayersReducer,
    [SCENE_STORE]: SceneReducer,
    [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
    [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
    [SELECTED_STORE]: SelectedReducer,
    [SESSION_STORE]: SessionReducer,
    [SLIDER_STORE]: SliderReducer,
    [TOGGLE_STORE]: ToggleReducer,
    [VERSE_BARS_STORE]: VerseBarsReducer,
    [VIEWPORT_STORE]: ViewportReducer
})

export const getCombinedReducers = songIndex => combineReducers({
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
    [MOUNT_STORE]: MountReducer,
    [OPTION_STORE]: getOptionReducer(songIndex),
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

