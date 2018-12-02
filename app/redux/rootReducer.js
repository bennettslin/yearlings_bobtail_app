import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import AudioReducer from './audio/reducer'
import DeviceReducer from './device/reducer'
import DotsReducer from './dots/reducer'
import EventReducer from './event/reducer'
import LoadReducer from './load/reducer'
import OptionReducer from './option/reducer'
import PlayerReducer from './player/reducer'
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
    AUDIO_STORE,
    DEVICE_STORE,
    DOTS_STORE,
    EVENT_STORE,
    LOAD_STORE,
    OPTION_STORE,
    PLAYER_STORE,
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
    [VERSE_BARS_STORE]: VerseBarsReducer,
    [PLAYER_STORE]: PlayerReducer,
    [SCROLL_CAROUSEL_STORE]: ScrollCarouselReducer,
    [SCROLL_LYRIC_STORE]: ScrollLyricReducer,
    [SONG_STORE]: SongReducer,
    [ACCESS_STORE]: AccessReducer,
    [AUDIO_STORE]: AudioReducer,
    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [DEVICE_STORE]: DeviceReducer,
    [DOTS_STORE]: DotsReducer,
    [EVENT_STORE]: EventReducer,
    [LOAD_STORE]: LoadReducer,
    [OPTION_STORE]: OptionReducer,
    [RENDER_STORE]: RenderReducer,
    [RENDERABLE_STORE]: RenderableReducer,
    [RENDERED_STORE]: RenderedReducer,
    [RESPONSIVE_STORE]: ResponsiveReducer,
    [SESSION_STORE]: SessionReducer,
    [SLIDER_STORE]: SliderReducer
})

export default rootReducer
