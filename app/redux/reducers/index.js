import { combineReducers } from 'redux'
// import { AlbumReducer } from './album'
import { AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer } from './access'
import { IsPlayingReducer } from './audio'
import { DeviceStoreReducer } from './device'
import { AppMountedReducer, CanPlayThroughsReducer, IsScoreLoadedReducer } from './load'
import { isWindowResizeRenderableReducer, isSongChangeRenderableReducer, CanTheatreRenderReducer, CanMainRenderReducer, CanVerseRenderReducer, CanLyricRenderReducer, CanCarouselRenderReducer, CanPresencesRenderReducer } from './render'
import { RenderableStoreReducer } from './renderable'
import { ResponsiveStoreReducer } from './responsive'
import { CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, IsLyricExpandedReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, ShownBookColumnIndexReducer, IsManualScrollReducer } from './session'
import { SliderStoreReducer } from './slider'
import { SelectedStoreReducer, AccessIndexReducer, AdminIndexReducer, AudioOptionIndexReducer, CarouselNavIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, ScoreIndexReducer, TipsIndexReducer, TitleIndexReducer, WikiIndexReducer } from './storage'

import {
    DEVICE_STORE,
    RENDERABLE_STORE,
    RESPONSIVE_STORE,
    SELECTED_STORE,
    SLIDER_STORE
} from 'constants/state'

// const isDevelopment = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers({

    // ...isDevelopment && {
    //     album: AlbumReducer
    // },

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

    isWindowResizeRenderable: isWindowResizeRenderableReducer,
    isSongChangeRenderable: isSongChangeRenderableReducer,

    canTheatreRender: CanTheatreRenderReducer,
    canVerseRender: CanVerseRenderReducer,
    canMainRender: CanMainRenderReducer,
    canLyricRender: CanLyricRenderReducer,
    canCarouselRender: CanCarouselRenderReducer,
    canPresencesRender: CanPresencesRenderReducer,

    [RENDERABLE_STORE]: RenderableStoreReducer,

    carouselAnnotationIndex: CarouselAnnotationIndexReducer,
    interactivatedVerseIndex: InteractivatedVerseIndexReducer,
    isLyricExpanded: IsLyricExpandedReducer,
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    isManualScroll: IsManualScrollReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    [SLIDER_STORE]: SliderStoreReducer,
    [SELECTED_STORE]: SelectedStoreReducer,

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
