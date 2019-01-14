import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import AnnotationReducer from './annotation/reducer'
import AudioReducer from './audio/reducer'
import DeviceReducer from './viewport/reducer'
import DotsReducer from './dots/reducer'
import DotsSlideReducer from './dotsSlide/reducer'
import FocusReducer from './focus/reducer'
import LoadReducer from './load/reducer'
import LyricReducer from './lyric/reducer'
import MobileReducer from './mobile/reducer'
import MountReducer from './mount/reducer'
import OptionReducer from './option/reducer'
import PlayersReducer from './players/reducer'
import ResponsiveReducer from './responsive/reducer'
import SceneReducer from './scene/reducer'
import ScrollCarouselReducer from './scrollCarousel/reducer'
import ScrollLyricReducer from './scrollLyric/reducer'
import SelectedReducer from './selected/reducer'
import SessionReducer from './session/reducer'
import SliderReducer from './slider/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'
import VerseBarsReducer from './verseBars/reducer'

import {
    ACCESS_STORE,
    ANNOTATION_STORE,
    AUDIO_STORE,
    VIEWPORT_STORE,
    DOTS_STORE,
    DOTS_SLIDE_STORE,
    FOCUS_STORE,
    LOAD_STORE,
    LYRIC_STORE,
    MOBILE_STORE,
    MOUNT_STORE,
    OPTION_STORE,
    PLAYERS_STORE,
    RESPONSIVE_STORE,
    SCENE_STORE,
    SCROLL_CAROUSEL_STORE,
    SCROLL_LYRIC_STORE,
    SELECTED_STORE,
    SESSION_STORE,
    SLIDER_STORE,
    TOGGLE_STORE,
    TRANSIENT_STORE,
    VERSE_BARS_STORE
} from './storeKeys'

const rootReducer = combineReducers({
    [SELECTED_STORE]: SelectedReducer,
    [LYRIC_STORE]: LyricReducer,
    [SCENE_STORE]: SceneReducer,
    [VIEWPORT_STORE]: DeviceReducer,

    [AUDIO_STORE]: AudioReducer,
    [ACCESS_STORE]: AccessReducer,
    [SESSION_STORE]: SessionReducer,
    [PLAYERS_STORE]: PlayersReducer,
    [MOBILE_STORE]: MobileReducer,
    [MOUNT_STORE]: MountReducer,

    [RESPONSIVE_STORE]: ResponsiveReducer,

    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [OPTION_STORE]: OptionReducer,
    [DOTS_STORE]: DotsReducer,
    [DOTS_SLIDE_STORE]: DotsSlideReducer,
    [SLIDER_STORE]: SliderReducer,

    [LOAD_STORE]: LoadReducer,

    // Queued event stores.
    [FOCUS_STORE]: FocusReducer,
    [ANNOTATION_STORE]: AnnotationReducer,
    [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
    [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
    [VERSE_BARS_STORE]: VerseBarsReducer
})

export default rootReducer
