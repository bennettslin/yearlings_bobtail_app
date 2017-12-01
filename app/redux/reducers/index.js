import { combineReducers } from 'redux'
import { AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer } from './access'
import { IsPlayingReducer, UpdatedTimePlayedReducer } from './audio'
import { DeviceIndexReducer, WindowWidthReducer, WindowHeightReducer, StageCoordinatesReducer } from './device'
import { CanPlayThroughsReducer, IsScoreLoadedReducer } from './player'
import { IsHeightlessLyricColumnReducer, IsHiddenNavReducer, IsMobileWikiReducer, IsScoresTipsInMainReducer, IsTitleInAudioReducer, ShowOneOfTwoLyricColumnsReducer, ShowShrunkNavIconReducer, ShowSingleBookColumnReducer } from './responsive'
import { AppMountedReducer, IsHeavyRenderReadyReducer, RenderReadySongIndexReducer, RenderReadyAnnotationIndexReducer, CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, CurrentSceneIndexReducer, IsLyricExpandedReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, SelectedVerseElementReducer, ShownBookColumnIndexReducer } from './session'
import { IsSliderMovingReducer, IsSliderTouchedReducer, SliderLeftReducer, SliderRatioReducer, SliderWidthReducer, SliderVerseElementReducer, SliderVerseIndexReducer } from './slider'
import { AccessIndexReducer, AdminIndexReducer, AnnotationIndexReducer, AudioOptionIndexReducer, CarouselNavIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, OverviewIndexReducer, ScoreIndexReducer, SongIndexReducer, TimeReducer, TipsIndexReducer, TitleIndexReducer, VerseIndexReducer, WikiIndexReducer } from './storage'

const rootReducer = combineReducers({

    accessedAnnotationIndex: AccessedAnnotationIndexReducer,
    accessedAnnotationAnchorIndex: AccessedAnnotationAnchorIndexReducer,
    accessedDotIndex: AccessedDotIndexReducer,
    accessedNavSongIndex: AccessedNavSongIndexReducer,

    isPlaying: IsPlayingReducer,
    updatedTimePlayed: UpdatedTimePlayedReducer,

    deviceIndex: DeviceIndexReducer,
    windowHeight: WindowHeightReducer,
    windowWidth: WindowWidthReducer,
    stageCoordinates: StageCoordinatesReducer,

    canPlayThroughs: CanPlayThroughsReducer,
    isScoreLoaded: IsScoreLoadedReducer,

    isHeightlessLyricColumn: IsHeightlessLyricColumnReducer,
    isHiddenNav: IsHiddenNavReducer,
    isMobileWiki: IsMobileWikiReducer,
    isScoresTipsInMain: IsScoresTipsInMainReducer,
    isTitleInAudio: IsTitleInAudioReducer,
    showOneOfTwoLyricColumns: ShowOneOfTwoLyricColumnsReducer,
    showShrunkNavIcon: ShowShrunkNavIconReducer,
    showSingleBookColumn: ShowSingleBookColumnReducer,

    appMounted: AppMountedReducer,
    isHeavyRenderReady: IsHeavyRenderReadyReducer,
    renderReadySongIndex: RenderReadySongIndexReducer,
    renderReadyAnnotationIndex: RenderReadyAnnotationIndexReducer,
    carouselAnnotationIndex: CarouselAnnotationIndexReducer,
    interactivatedVerseIndex: InteractivatedVerseIndexReducer,
    currentSceneIndex: CurrentSceneIndexReducer,
    isLyricExpanded: IsLyricExpandedReducer,
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    selectedVerseElement: SelectedVerseElementReducer,
    shownBookColumnIndex: ShownBookColumnIndexReducer,

    isSliderMoving: IsSliderMovingReducer,
    isSliderTouched: IsSliderTouchedReducer,
    sliderLeft: SliderLeftReducer,
    sliderRatio: SliderRatioReducer,
    sliderWidth: SliderWidthReducer,
    sliderVerseElement: SliderVerseElementReducer,
    sliderVerseIndex: SliderVerseIndexReducer,

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
