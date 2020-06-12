import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeight,
    getMainHeight
} from '../../helpers/resize/mount'
import { mapIsDesktopWidth } from '../device/selectors'
import { mapIsLyricLogue } from '../lyric/selectors'
import { mapStageHeight } from '../stage/selectors'
import { mapIsLyricExpanded } from '../toggle/selectors'
import {
    mapDeviceWidthIndex,
    mapWindowHeight,
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanCarouselMount
} from '../viewport/selectors'

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

