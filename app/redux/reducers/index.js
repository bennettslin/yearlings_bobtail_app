import { combineReducers } from 'redux'
import { AccessedAnnotationAnchorIndexReducer, AccessedDotIndexReducer, AccessedNavSongIndexReducer } from './access'
import { IsCarouselExpandableReducer, IsHeightlessLyricColumnReducer, IsHiddenNavReducer } from './responsive'
import { AccessIndexReducer, AdminIndexReducer, AnnotationIndexReducer, AudioOptionIndexReducer, CarouselIndexReducer, DotKeysReducer, DotsIndexReducer, LyricColumnIndexReducer, NavIndexReducer, OverviewIndexReducer, ScoreIndexReducer, SongIndexReducer, TimeReducer, TipsIndexReducer, TitleIndexReducer, VerseIndexReducer, WikiIndexReducer } from './storage'

const rootReducer = combineReducers({
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
    selectedWikiIndex: WikiIndexReducer,

    accessedAnnotationAnchorIndex: AccessedAnnotationAnchorIndexReducer,
    accessedDotIndex: AccessedDotIndexReducer,
    accessedNavSongIndex: AccessedNavSongIndexReducer,

    isCarouselExpandable: IsCarouselExpandableReducer,
    isHeightlessLyricColumn: IsHeightlessLyricColumnReducer,
    isHiddenNav: IsHiddenNavReducer
})

export default rootReducer
