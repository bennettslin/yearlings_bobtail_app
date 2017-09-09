import { combineReducers } from 'redux'
import { AccessedAnnotationIndexReducer, AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer } from './access'
import { IsPlayingReducer, UpdatedTimePlayedReducer } from './audio'
import { DeviceIndexReducer, WindowWidthReducer, WindowHeightReducer } from './device'
import { CanPlayThroughsReducer } from './player'
import { IsHeightlessLyricColumnReducer, IsHiddenNavReducer, IsMobileWikiReducer, IsScoresTipsInMainReducer, IsTitleInAudioReducer, ShowOneOfTwoLyricColumnsReducer, ShowShrunkNavIconReducer, ShowSingleBookColumnReducer } from './responsive'
import { PopupAnnotationSongIndexReducer, PopupAnnotationIndexReducer, AppMountedReducer, isHeavyRenderReadyReducer, CarouselAnnotationIndexReducer, InteractivatedVerseIndexReducer, IsLyricExpandedReducer, IsVerseBarAboveReducer, IsVerseBarBelowReducer, OverviewLogueIndexReducer, OverviewSongIndexReducer, SelectedVerseElementReducer, ShownBookColumnIndexReducer } from './session'
import { IsSliderMovingReducer, IsSliderTouchedReducer, SliderLeftReducer, SliderRatioReducer, SliderWidthReducer, SliderVerseElementReducer, SliderVerseIndexReducer } from './slider'
import { AccessIndexReducer, AdminIndexReducer, AnnotationIndexReducer, AudioOptionIndexReducer, CarouselIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, NavIndexReducer, OverviewIndexReducer, ScoreIndexReducer, SongIndexReducer, TimeReducer, TipsIndexReducer, TitleIndexReducer, VerseIndexReducer, WikiIndexReducer } from './storage'

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

    canPlayThroughs: CanPlayThroughsReducer,

    isHeightlessLyricColumn: IsHeightlessLyricColumnReducer,
    isHiddenNav: IsHiddenNavReducer,
    isMobileWiki: IsMobileWikiReducer,
    isScoresTipsInMain: IsScoresTipsInMainReducer,
    isTitleInAudio: IsTitleInAudioReducer,
    showOneOfTwoLyricColumns: ShowOneOfTwoLyricColumnsReducer,
    showShrunkNavIcon: ShowShrunkNavIconReducer,
    showSingleBookColumn: ShowSingleBookColumnReducer,

    popupAnnotationSongIndex: PopupAnnotationSongIndexReducer,
    popupAnnotationIndex: PopupAnnotationIndexReducer,
    appMounted: AppMountedReducer,
    isHeavyRenderReady: isHeavyRenderReadyReducer,
    carouselAnnotationIndex: CarouselAnnotationIndexReducer,
    interactivatedVerseIndex: InteractivatedVerseIndexReducer,
    isLyricExpanded: IsLyricExpandedReducer,
    isVerseBarAbove: IsVerseBarAboveReducer,
    isVerseBarBelow: IsVerseBarBelowReducer,
    overviewLogueIndex: OverviewLogueIndexReducer,
    overviewSongIndex: OverviewSongIndexReducer,
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
    selectedCarouselIndex: CarouselIndexReducer,
    selectedDotKeys: DotKeysReducer,
    selectedDotsIndex: DotsIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedNavIndex: NavIndexReducer,
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
