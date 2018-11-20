import { combineReducers } from 'redux'
import {
    AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer
} from './access'
import { IsPlayingReducer } from './audio'
import { DeviceStoreReducer } from './device'
import {
    AppMountedReducer, CanPlayThroughsReducer, IsScoreLoadedReducer
} from './load'
import { RenderableStoreReducer } from './renderable'
import { RenderStoreReducer } from './render'
import { RenderedStoreReducer } from './rendered'
import { ResponsiveStoreReducer } from './responsive'
import {
    CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, IsLyricExpandedReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, ShownBookColumnIndexReducer, IsManualScrollReducer
} from './session'
import { SliderStoreReducer } from './slider'
import { SongStoreReducer } from './song'
import {
    AccessIndexReducer, AdminIndexReducer, AudioOptionIndexReducer, CarouselNavIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, ScoreIndexReducer, TipsIndexReducer, TitleIndexReducer, WikiIndexReducer
} from './storage'

import {
    DEVICE_STORE,
    RENDERABLE_STORE,
    RENDER_STORE,
    RENDERED_STORE,
    RESPONSIVE_STORE,
    SONG_STORE,
    SLIDER_STORE
} from 'constants/state'

const rootReducer = combineReducers({
    accessedAnnotationIndex: AccessedAnnotationIndexReducer,
    accessedAnnotationAnchorIndex: AccessedAnnotationAnchorIndexReducer,
    accessedDotIndex: AccessedDotIndexReducer,
    accessedNavSongIndex: AccessedNavSongIndexReducer,

    isPlaying: IsPlayingReducer,

    [DEVICE_STORE]: DeviceStoreReducer,

    appMounted: AppMountedReducer,
    canPlayThroughs: CanPlayThroughsReducer,
    isScoreLoaded: IsScoreLoadedReducer,

    [RESPONSIVE_STORE]: ResponsiveStoreReducer,

    [RENDERABLE_STORE]: RenderableStoreReducer,
    [RENDER_STORE]: RenderStoreReducer,
    [RENDERED_STORE]: RenderedStoreReducer,

    carouselAnnotationIndex: CarouselAnnotationIndexReducer,
    interactivatedVerseIndex: InteractivatedVerseIndexReducer,
    isLyricExpanded: IsLyricExpandedReducer,
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    isManualScroll: IsManualScrollReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    [SLIDER_STORE]: SliderStoreReducer,
    [SONG_STORE]: SongStoreReducer,

    selectedAccessIndex: AccessIndexReducer,
    selectedAdminIndex: AdminIndexReducer,
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedCarouselNavIndex: CarouselNavIndexReducer,
    selectedDotKeys: DotKeysReducer,
    selectedDotsIndex: DotsIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedScoreIndex: ScoreIndexReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedTitleIndex: TitleIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
