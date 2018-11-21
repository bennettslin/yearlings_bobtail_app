import { combineReducers } from 'redux'
import {
    AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer
} from './access'
import ToggleReducer from './toggle'
import { IsPlayingReducer } from './audio'
import DeviceReducer from './device'
import {
    AppMountedReducer, CanPlayThroughsReducer, IsScoreLoadedReducer
} from './load'
import RenderReducer from './render'
import RenderableReducer from './renderable'
import RenderedReducer from './rendered'
import ResponsiveReducer from './responsive'
import {
    CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, ShownBookColumnIndexReducer
} from './session'
import SliderReducer from './slider'
import SongReducer from './song'
import {
    AccessIndexReducer, AudioOptionIndexReducer, CarouselNavIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, TipsIndexReducer, WikiIndexReducer
} from './storage'

import {
    TOGGLE_STORE,
    DEVICE_STORE,
    RENDERABLE_STORE,
    RENDER_STORE,
    RENDERED_STORE,
    RESPONSIVE_STORE,
    SONG_STORE,
    SLIDER_STORE
} from 'constants/state'

const rootReducer = combineReducers({

    // TODO: Access store.
    accessedAnnotationIndex: AccessedAnnotationIndexReducer,
    accessedAnnotationAnchorIndex: AccessedAnnotationAnchorIndexReducer,
    accessedDotIndex: AccessedDotIndexReducer,
    accessedNavSongIndex: AccessedNavSongIndexReducer,

    isPlaying: IsPlayingReducer,

    [TOGGLE_STORE]: ToggleReducer,
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
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    [SLIDER_STORE]: SliderReducer,
    [SONG_STORE]: SongReducer,

    // TODO: Put some of these in toggle store.
    selectedAccessIndex: AccessIndexReducer,
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedCarouselNavIndex: CarouselNavIndexReducer,
    selectedDotKeys: DotKeysReducer,
    selectedDotsIndex: DotsIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
