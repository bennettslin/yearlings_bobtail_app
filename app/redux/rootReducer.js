import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import AnnotationReducer from './annotation/reducer'
import DeviceReducer from './device/reducer'
import DotsReducer from './dots/reducer'
import EventReducer from './event/reducer'
import LoadReducer from './load/reducer'
import OptionReducer from './option/reducer'
import PlayersReducer from './players/reducer'
import PlayingReducer from './playing/reducer'
import RenderReducer from './render/reducer'
import RenderableReducer from './renderable/reducer'
import RenderedReducer from './rendered/reducer'
import ResponsiveReducer from './responsive/reducer'
import ScrollCarouselReducer from './scrollCarousel/reducer'
import ScrollLyricReducer from './scrollLyric/reducer'
import SessionReducer from './session/reducer'
import SliderReducer from './slider/reducer'
import SongReducer from './song/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'
import VerseBarsReducer from './verseBars/reducer'

import {
    ACCESS_STORE,
    ANNOTATION_STORE,
    DEVICE_STORE,
    DOTS_STORE,
    EVENT_STORE,
    LOAD_STORE,
    OPTION_STORE,
    PLAYERS_STORE,
    PLAYING_STORE,
    RENDER_STORE,
    RENDERABLE_STORE,
    RENDERED_STORE,
    RESPONSIVE_STORE,
    SCROLL_CAROUSEL_STORE,
    SCROLL_LYRIC_STORE,
    SESSION_STORE,
    SLIDER_STORE,
    SONG_STORE,
    TOGGLE_STORE,
    TRANSIENT_STORE,
    VERSE_BARS_STORE
} from './storeKeys'

const rootReducer = combineReducers({
    [PLAYING_STORE]: PlayingReducer,
    [SONG_STORE]: SongReducer,
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
    [RENDER_STORE]: RenderReducer,
    [RENDERABLE_STORE]: RenderableReducer,

    // Queued event stores.
    [ANNOTATION_STORE]: AnnotationReducer,
    [EVENT_STORE]: EventReducer,
    [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
    [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
    [VERSE_BARS_STORE]: VerseBarsReducer
})

export default rootReducer
