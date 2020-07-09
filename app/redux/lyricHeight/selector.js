import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeightStyle
} from '../../helpers/resize/section'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapStageHeight } from '../stage/selector'
import { mapIsLyricExpanded } from '../toggle/selector'
import {
    mapDeviceWidthIndex,
    mapWindowHeight,
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanCarouselShow
} from '../viewport/selector'

export const mapLyricDynamicHeight = createSelector(
    mapCanCarouselShow,
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapStageHeight,
    mapDeviceWidthIndex,
    mapWindowHeight,
    (
        canCarouselShow,
        isHeightlessLyric,
        menuHeight,
        stageHeight,
        deviceWidthIndex,
        windowHeight
    ) => getLyricDynamicHeight({
        canCarouselShow,
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
    ) => getLyricOverviewHeightStyle({
        lyricDynamicHeight,
        isLyricLogue,
        isHeightlessLyric,
        menuHeight,
        isLyricExpanded
    })
)
