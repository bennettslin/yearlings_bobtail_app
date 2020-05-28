import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeight,
    getMainHeight
} from '../../helpers/resize/mount'
import { IS_LYRIC_LOGUE_SELECTOR } from '../lyric/selectors'
import {
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    MENU_HEIGHT_SELECTOR
} from '../responsive/selectors'
import { STAGE_HEIGHT_SELECTOR } from '../stage/selectors'
import { IS_LYRIC_EXPANDED_SELECTOR } from '../toggle/selectors'
import {
    DEVICE_WIDTH_INDEX_SELECTOR,
    WINDOW_HEIGHT_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR
} from '../viewport/selectors'

export const CAN_CAROUSEL_MOUNT_SELECTOR = (
    { mountStore: { canCarouselMount } }
) => canCarouselMount

export const CAN_SCORE_MOUNT_SELECTOR = (
    { mountStore: { canScoreMount } }
) => canScoreMount

export const CAN_SLIDER_MOUNT_SELECTOR = (
    { mountStore: { canSliderMount } }
) => canSliderMount

export const LYRIC_DYNAMIC_HEIGHT_SELECTOR = createSelector(
    CAN_CAROUSEL_MOUNT_SELECTOR,
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    MENU_HEIGHT_SELECTOR,
    STAGE_HEIGHT_SELECTOR,
    DEVICE_WIDTH_INDEX_SELECTOR,
    WINDOW_HEIGHT_SELECTOR,
    (
        canCarouselMount,
        isHeightlessLyric,
        menuHeight,
        stageHeight,
        deviceWidthIndex,
        windowHeight
    ) => getLyricDynamicHeight({
        canCarouselMount,
        isHeightlessLyric,
        menuHeight,
        stageHeight,
        deviceWidthIndex,
        windowHeight
    })
)

export const LYRIC_OVERVIEW_HEIGHT_STYLE_SELECTOR = createSelector(
    LYRIC_DYNAMIC_HEIGHT_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR,
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    MENU_HEIGHT_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    (
        lyricDynamicHeight,
        isLyricLogue,
        isHeightlessLyric,
        menuHeight,
        isLyricExpanded
    ) => getLyricOverviewHeight({
        lyricDynamicHeight,
        isLyricLogue,
        isHeightlessLyric,
        menuHeight,
        isLyricExpanded
    })
)

export const MAIN_HEIGHT_SELECTOR = createSelector(
    CAN_CAROUSEL_MOUNT_SELECTOR,
    LYRIC_DYNAMIC_HEIGHT_SELECTOR,
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    MENU_HEIGHT_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR,
    (
        canCarouselMount,
        lyricDynamicHeight,
        isHeightlessLyric,
        menuHeight,
        isDesktopWidth
    ) => getMainHeight({
        canCarouselMount,
        lyricDynamicHeight,
        isHeightlessLyric,
        menuHeight,
        isDesktopWidth
    })
)

// import {
//     LYRIC_SONG_INDEX_SELECTOR,
//     LYRIC_VERSE_INDEX_SELECTOR,
//     LYRIC_ANNOTATION_INDEX_SELECTOR,
//     IS_LYRIC_LOGUE_SELECTOR
// } from '../../../redux/lyric/selectors'

// lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
// lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state),
// lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
// isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)
