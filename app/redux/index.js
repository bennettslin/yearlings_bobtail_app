import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import ActivatedReducer from './activated/reducer'
import AnnotationReducer from './annotation/reducer'
import AppReducer from './app/reducer'
import AudioReducer from './audio/reducer'
import BannerReducer from './banner/reducer'
import DotsReducer from './dots/reducer'
import DotsSlideReducer from './dotsSlide/reducer'
import FocusReducer from './focus/reducer'
import LoadReducer from './load/reducer'
import LyricReducer from './lyric/reducer'
import MountReducer from './mount/reducer'
import OptionReducer from './option/reducer'
import PlayersReducer from './players/reducer'
import ResponsiveReducer from './responsive/reducer'
import SceneReducer from './scene/reducer'
import ScrollCarouselReducer from './scrollCarousel/reducer'
import ScrollLyricReducer from './scrollLyric/reducer'
import ScrollOverlayReducer from './scrollOverlay/reducer'
import SelectedReducer from './selected/reducer'
import SessionReducer from './session/reducer'
import SliderReducer from './slider/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'
import VerseBarsReducer from './verseBars/reducer'
import ViewportReducer from './viewport/reducer'

import {
    ACCESS_STORE,
    ACTIVATED_STORE,
    ANNOTATION_STORE,
    APP_STORE,
    AUDIO_STORE,
    BANNER_STORE,
    DOTS_STORE,
    DOTS_SLIDE_STORE,
    FOCUS_STORE,
    LOAD_STORE,
    LYRIC_STORE,
    MOUNT_STORE,
    OPTION_STORE,
    PLAYERS_STORE,
    RESPONSIVE_STORE,
    SCENE_STORE,
    SCROLL_CAROUSEL_STORE,
    SCROLL_LYRIC_STORE,
    SCROLL_OVERLAY_STORE,
    SELECTED_STORE,
    SESSION_STORE,
    SLIDER_STORE,
    TOGGLE_STORE,
    TRANSIENT_STORE,
    VERSE_BARS_STORE,
    VIEWPORT_STORE
} from '../constants/store'

export default combineReducers({
    [ACCESS_STORE]: AccessReducer,
    [ACTIVATED_STORE]: ActivatedReducer,
    [ANNOTATION_STORE]: AnnotationReducer,
    [APP_STORE]: AppReducer,
    [AUDIO_STORE]: AudioReducer,
    [BANNER_STORE]: BannerReducer,
    [DOTS_STORE]: DotsReducer,
    [DOTS_SLIDE_STORE]: DotsSlideReducer,
    [FOCUS_STORE]: FocusReducer,
    [LOAD_STORE]: LoadReducer,
    [LYRIC_STORE]: LyricReducer,
    [MOUNT_STORE]: MountReducer,
    [OPTION_STORE]: OptionReducer,
    [PLAYERS_STORE]: PlayersReducer,
    [RESPONSIVE_STORE]: ResponsiveReducer,
    [SCENE_STORE]: SceneReducer,
    [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
    [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
    [SCROLL_OVERLAY_STORE]: ScrollOverlayReducer,
    [SELECTED_STORE]: SelectedReducer,
    [SESSION_STORE]: SessionReducer,
    [SLIDER_STORE]: SliderReducer,
    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [VERSE_BARS_STORE]: VerseBarsReducer,
    [VIEWPORT_STORE]: ViewportReducer
})
