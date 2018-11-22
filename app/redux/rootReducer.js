import { combineReducers } from 'redux'
import {
    AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer
} from './access/reducer'
import ToggleReducer from './toggle/reducer'
import TransientReducer from './transient/reducer'
import { IsPlayingReducer } from './audio/reducer'
import DeviceReducer from './device/reducer'
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
    AudioOptionIndexReducer, DotKeysReducer, LyricColumnIndexReducer, OverviewIndexReducer, TipsIndexReducer, WikiIndexReducer
} from './storage/reducer'

import {
    TOGGLE_STORE,
    TRANSIENT_STORE,
    DEVICE_STORE,
    RENDERABLE_STORE,
    RENDER_STORE,
    RENDERED_STORE,
    RESPONSIVE_STORE,
    SONG_STORE,
    SLIDER_STORE
} from './storeKeys'

const rootReducer = combineReducers({

    // TODO: Access store.
    accessedAnnotationIndex: AccessedAnnotationIndexReducer,
    accessedAnnotationAnchorIndex: AccessedAnnotationAnchorIndexReducer,
    accessedDotIndex: AccessedDotIndexReducer,
    accessedNavSongIndex: AccessedNavSongIndexReducer,

    isPlaying: IsPlayingReducer,

    [TOGGLE_STORE]: ToggleReducer,
    [TRANSIENT_STORE]: TransientReducer,
    [DEVICE_STORE]: DeviceReducer,

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
    selectedDotKeys: DotKeysReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
