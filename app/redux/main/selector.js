import { createSelector } from 'reselect'
import { getIsShelfLeftShown } from '../../helpers/main'
import { getMainHeight } from '../../helpers/resize/mount'
import { mapIsActivated } from '../activated/selector'
import {
    mapIsPhoneWidth,
    mapIsDesktopWidth
} from '../device/selector'
import {
    mapCanLyricCarouselEnter,
    mapLyricAnnotationIndex,
    mapIsLyricLogue
} from '../lyric/selector'
import { mapLyricDynamicHeight } from '../lyricHeight/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../toggle/selector'
import {
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanCarouselMount
} from '../viewport/selector'

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

export const mapIsShelfLeftShown = createSelector(
    mapIsPhoneWidth,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsOverlayShown,
    mapCanLyricCarouselEnter,
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
    mapIsOverviewShown,
    mapIsTipsShown,
    (
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isOverviewShown,
        isTipsShown
    ) => getIsShelfLeftShown({
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isOverviewShown,
        isTipsShown
    })
)
