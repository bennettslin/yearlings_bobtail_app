import { combineReducers } from 'redux'
import AccessReducer from './access/reducer'
import { IsPlayingReducer } from './audio/reducer'
import DeviceReducer from './device/reducer'
import DotsReducer from './dots/reducer'
import {
    AppMountedReducer, CanPlayThroughsReducer, IsScoreLoadedReducer
} from './load/reducer'
import RenderReducer from './render/reducer'
import RenderableReducer from './renderable/reducer'
import RenderedReducer from './rendered/reducer'
import ResponsiveReducer from './responsive/reducer'
import {
    CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, ShownBookColumnIndexReducer
} from './session/reducer'
import SliderReducer from './slider/reducer'
import SongReducer from './song/reducer'
import {
    AudioOptionIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, TipsIndexReducer, WikiIndexReducer
} from './storage/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'

import {
    ACCESS_STORE,
    DEVICE_STORE,
    DOTS_STORE,
    RENDER_STORE,
    RENDERABLE_STORE,
    RENDERED_STORE,
    RESPONSIVE_STORE,
    SLIDER_STORE,
    SONG_STORE,
    TOGGLE_STORE,
    TRANSIENT_STORE
} from './storeKeys'

const rootReducer = combineReducers({

    [ACCESS_STORE]: AccessReducer,
    isPlaying: IsPlayingReducer,

    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [DEVICE_STORE]: DeviceReducer,
    [DOTS_STORE]: DotsReducer,

    appMounted: AppMountedReducer,
    canPlayThroughs: CanPlayThroughsReducer,
    isScoreLoaded: IsScoreLoadedReducer,

    [RESPONSIVE_STORE]: ResponsiveReducer,

    [RENDER_STORE]: RenderReducer,
    [RENDERABLE_STORE]: RenderableReducer,
    [RENDERED_STORE]: RenderedReducer,

    carouselAnnotationIndex: CarouselAnnotationIndexReducer,
    interactivatedVerseIndex: InteractivatedVerseIndexReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    [SLIDER_STORE]: SliderReducer,
    [SONG_STORE]: SongReducer,

    // TODO: Put some of these in toggle store.
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
