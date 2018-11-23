import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import AudioReducer from './audio/reducer'
import DeviceReducer from './device/reducer'
import DotsReducer from './dots/reducer'
import {
    AppMountedReducer, IsScoreLoadedReducer
} from './load/reducer'
import RenderReducer from './render/reducer'
import RenderableReducer from './renderable/reducer'
import RenderedReducer from './rendered/reducer'
import ResponsiveReducer from './responsive/reducer'
import SessionReducer from './session/reducer'
import SliderReducer from './slider/reducer'
import SongReducer from './song/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'

import {
    ACCESS_STORE,
    AUDIO_STORE,
    DEVICE_STORE,
    DOTS_STORE,
    RENDER_STORE,
    RENDERABLE_STORE,
    RENDERED_STORE,
    RESPONSIVE_STORE,
    SESSION_STORE,
    SLIDER_STORE,
    SONG_STORE,
    TOGGLE_STORE,
    TRANSIENT_STORE
} from './storeKeys'

const rootReducer = combineReducers({

    [ACCESS_STORE]: AccessReducer,
    [AUDIO_STORE]: AudioReducer,
    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [DEVICE_STORE]: DeviceReducer,
    [DOTS_STORE]: DotsReducer,
    appMounted: AppMountedReducer,
    isScoreLoaded: IsScoreLoadedReducer,
    [RENDER_STORE]: RenderReducer,
    [RENDERABLE_STORE]: RenderableReducer,
    [RENDERED_STORE]: RenderedReducer,
    [RESPONSIVE_STORE]: ResponsiveReducer,
    [SESSION_STORE]: SessionReducer,
    [SLIDER_STORE]: SliderReducer,
    [SONG_STORE]: SongReducer
})

export default rootReducer
