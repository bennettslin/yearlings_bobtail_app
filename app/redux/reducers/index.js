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
    CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, IsLyricExpandedReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, ShownBookColumnIndexReducer, IsManualScrollReducer
} from './session'
import SliderReducer from './slider'
import SongReducer from './song'
import {
    AccessIndexReducer, AdminIndexReducer, AudioOptionIndexReducer, CarouselNavIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, TipsIndexReducer, TitleIndexReducer, WikiIndexReducer
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
    isLyricExpanded: IsLyricExpandedReducer,
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    isManualScroll: IsManualScrollReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    [SLIDER_STORE]: SliderReducer,
    [SONG_STORE]: SongReducer,

    // TODO: Put some of these in toggle store.
    selectedAccessIndex: AccessIndexReducer,
    selectedAdminIndex: AdminIndexReducer,
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedCarouselNavIndex: CarouselNavIndexReducer,
    selectedDotKeys: DotKeysReducer,
    selectedDotsIndex: DotsIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedTitleIndex: TitleIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
