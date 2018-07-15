import { combineReducers } from 'redux'
import { AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer } from './access'
import { IsPlayingReducer, UpdatedTimePlayedReducer } from './audio'
import { DeviceStoreReducer } from './device'
import { CanPlayThroughsReducer, IsScoreLoadedReducer } from './player'
import { isWindowResizeRenderableReducer, isSongChangeRenderableReducer, CanTheatreRenderReducer, CanMainRenderReducer, CanSliderRenderReducer, CanLyricRenderReducer, CanCarouselRenderReducer, CanSceneRenderReducer, RenderableCubesYIndexReducer, CanPresencesRenderReducer, CanPixelsRenderReducer } from './render'
import { RenderableSongIndexReducer, RenderableAnnotationIndexReducer, RenderableVerseIndexReducer, RenderableSceneIndexReducer } from './renderable'
import { IsHeightlessLyricColumnReducer, IsHiddenCarouselNavReducer, IsMobileWikiReducer, IsScoresTipsInMainReducer, isTwoRowMenuReducer, ShowOneOfTwoLyricColumnsReducer, ShowShrunkNavIconReducer, ShowSingleBookColumnReducer } from './responsive'
import { AppMountedReducer, CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, IsLyricExpandedReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, ShownBookColumnIndexReducer, IsManualScrollReducer } from './session'
import { SliderStoreReducer } from './slider'
import { AccessIndexReducer, AdminIndexReducer, AnnotationIndexReducer, AudioOptionIndexReducer, CarouselNavIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, ScoreIndexReducer, SongIndexReducer, TimeReducer, TipsIndexReducer, TitleIndexReducer, VerseIndexReducer, WikiIndexReducer } from './storage'

import {
    DEVICE_STORE,
    SLIDER_STORE
} from '../../constants/state'

const rootReducer = combineReducers({

    accessedAnnotationIndex: AccessedAnnotationIndexReducer,
    accessedAnnotationAnchorIndex: AccessedAnnotationAnchorIndexReducer,
    accessedDotIndex: AccessedDotIndexReducer,
    accessedNavSongIndex: AccessedNavSongIndexReducer,

    isPlaying: IsPlayingReducer,
    updatedTimePlayed: UpdatedTimePlayedReducer,

    [DEVICE_STORE]: DeviceStoreReducer,

    canPlayThroughs: CanPlayThroughsReducer,
    isScoreLoaded: IsScoreLoadedReducer,

    isHeightlessLyricColumn: IsHeightlessLyricColumnReducer,
    isHiddenCarouselNav: IsHiddenCarouselNavReducer,
    isMobileWiki: IsMobileWikiReducer,
    isScoresTipsInMain: IsScoresTipsInMainReducer,
    isTwoRowMenu: isTwoRowMenuReducer,
    showOneOfTwoLyricColumns: ShowOneOfTwoLyricColumnsReducer,
    showShrunkNavIcon: ShowShrunkNavIconReducer,
    showSingleBookColumn: ShowSingleBookColumnReducer,

    appMounted: AppMountedReducer,
    isWindowResizeRenderable: isWindowResizeRenderableReducer,
    isSongChangeRenderable: isSongChangeRenderableReducer,
    canTheatreRender: CanTheatreRenderReducer,
    canMainRender: CanMainRenderReducer,
    canSliderRender: CanSliderRenderReducer,
    canLyricRender: CanLyricRenderReducer,
    canCarouselRender: CanCarouselRenderReducer,
    canSceneRender: CanSceneRenderReducer,
    renderableCubesYIndex: RenderableCubesYIndexReducer,
    canPresencesRender: CanPresencesRenderReducer,
    canPixelsRender: CanPixelsRenderReducer,

    renderableSongIndex: RenderableSongIndexReducer,
    renderableAnnotationIndex: RenderableAnnotationIndexReducer,
    renderableVerseIndex: RenderableVerseIndexReducer,
    renderableSceneIndex: RenderableSceneIndexReducer,

    carouselAnnotationIndex: CarouselAnnotationIndexReducer,
    interactivatedVerseIndex: InteractivatedVerseIndexReducer,
    isLyricExpanded: IsLyricExpandedReducer,
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    isManualScroll: IsManualScrollReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    [SLIDER_STORE]: SliderStoreReducer,

    selectedAccessIndex: AccessIndexReducer,
    selectedAdminIndex: AdminIndexReducer,
    selectedAnnotationIndex: AnnotationIndexReducer,
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedCarouselNavIndex: CarouselNavIndexReducer,
    selectedDotKeys: DotKeysReducer,
    selectedDotsIndex: DotsIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedScoreIndex: ScoreIndexReducer,
    selectedSongIndex: SongIndexReducer,
    selectedTimePlayed: TimeReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedTitleIndex: TitleIndexReducer,
    selectedVerseIndex: VerseIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
