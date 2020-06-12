import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeight
} from '../../helpers/resize/mount'
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
