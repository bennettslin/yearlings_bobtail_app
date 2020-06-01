import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeight,
    getMainHeight
} from '../../helpers/resize/mount'
import { mapIsLyricLogue } from '../lyric/selectors'
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

export const mapCanCarouselMount = (
    { mountStore: { canCarouselMount } }
) => canCarouselMount

export const mapCanScoreMount = (
    { mountStore: { canScoreMount } }
) => canScoreMount

export const mapCanSliderMount = (
    { mountStore: { canSliderMount } }
) => canSliderMount

export const mapLyricDynamicHeight = createSelector(
    mapCanCarouselMount,
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

export const mapLyricOverviewHeightStyle = createSelector(
    mapLyricDynamicHeight,
    mapIsLyricLogue,
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

export const mapMainHeight = createSelector(
    mapCanCarouselMount,
    mapLyricDynamicHeight,
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

