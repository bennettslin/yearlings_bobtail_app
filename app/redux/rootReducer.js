import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import AnnotationReducer from './annotation/reducer'
import AudioReducer from './audio/reducer'
import ChangeReducer from './change/reducer'
import CurtainReducer from './curtain/reducer'
import DeviceReducer from './device/reducer'
import DotsReducer from './dots/reducer'
import FocusReducer from './focus/reducer'
import LoadReducer from './load/reducer'
import OptionReducer from './option/reducer'
import PlayersReducer from './players/reducer'
import RenderReducer from './render/reducer'
import RenderableReducer from './renderable/reducer'
import RenderedReducer from './rendered/reducer'
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
    CHANGE_STORE,
    CURTAIN_STORE,
    DEVICE_STORE,
    DOTS_STORE,
    FOCUS_STORE,
    LOAD_STORE,
    OPTION_STORE,
    PLAYERS_STORE,
    RENDER_STORE,
    RENDERABLE_STORE,
    RENDERED_STORE,
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
    [CURTAIN_STORE]: CurtainReducer,
    [CHANGE_STORE]: ChangeReducer,
    [RENDERABLE_STORE]: RenderableReducer,
    [RENDER_STORE]: RenderReducer,

    [SCENE_STORE]: SceneReducer,
    [AUDIO_STORE]: AudioReducer,
    [SELECTED_STORE]: SelectedReducer,
    [RENDERED_STORE]: RenderedReducer,
    [ACCESS_STORE]: AccessReducer,
    [SESSION_STORE]: SessionReducer,
    [PLAYERS_STORE]: PlayersReducer,

    [DEVICE_STORE]: DeviceReducer,
    [RESPONSIVE_STORE]: ResponsiveReducer,

    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [OPTION_STORE]: OptionReducer,
    [DOTS_STORE]: DotsReducer,
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
