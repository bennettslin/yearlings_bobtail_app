import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import AdminReducer from './admin/reducer'
import AnnotationReducer from './annotation/reducer'
import AppReducer from './app/reducer'
import AudioReducer from './audio/reducer'
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
import SelectedReducer from './selected/reducer'
import SessionReducer from './session/reducer'
import SliderReducer from './slider/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'
import VerseBarsReducer from './verseBars/reducer'
import ViewportReducer from './viewport/reducer'

import {
    ACCESS_STORE,
    ADMIN_STORE,
    ANNOTATION_STORE,
    AUDIO_STORE,
    VIEWPORT_STORE,
    DOTS_STORE,
    DOTS_SLIDE_STORE,
    FOCUS_STORE,
    LOAD_STORE,
    LYRIC_STORE,
    APP_STORE,
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
    [VIEWPORT_STORE]: ViewportReducer,
    [ACCESS_STORE]: AccessReducer,
    [TOGGLE_STORE]: ToggleReducer,
    [SESSION_STORE]: SessionReducer,
    [RESPONSIVE_STORE]: ResponsiveReducer,
    [OPTION_STORE]: OptionReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [ADMIN_STORE]: AdminReducer,
    [APP_STORE]: AppReducer,
    [MOUNT_STORE]: MountReducer,

    [SELECTED_STORE]: SelectedReducer,
    [LYRIC_STORE]: LyricReducer,
    [SCENE_STORE]: SceneReducer,

    [AUDIO_STORE]: AudioReducer,
    [PLAYERS_STORE]: PlayersReducer,

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
