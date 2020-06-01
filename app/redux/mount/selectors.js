import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeight,
    getMainHeight
} from '../../helpers/resize/mount'
import { mapIsLyricLogue } from '../lyric/selectors'
import {
    mapIsHeightlessLyric,
    mapMenuHeight
} from '../responsive/selectors'
import { mapStageHeight } from '../stage/selectors'
import { mapIsLyricExpanded } from '../toggle/selectors'
import {
    mapDeviceWidthIndex,
    mapWindowHeight,
    mapIsDesktopWidth
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
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapStageHeight,
    mapDeviceWidthIndex,
    mapWindowHeight,
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
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapIsLyricExpanded,
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
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapIsDesktopWidth,
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

