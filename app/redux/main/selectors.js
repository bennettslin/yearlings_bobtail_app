import { createSelector } from 'reselect'
import { getIsShelfLeftShown } from '../../helpers/main'
import { getMainHeight } from '../../helpers/resize/mount'
import { mapIsActivated } from '../activated/selectors'
import {
    mapIsPhoneWidth,
    mapIsDesktopWidth
} from '../device/selectors'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import {
    mapLyricAnnotationIndex,
    mapIsLyricLogue
} from '../lyric/selectors'
import { mapLyricDynamicHeight } from '../lyricHeight/selectors'
import { mapIsLogueOverviewShown } from '../option/selectors'
import { mapIsOverlayShown } from '../overlay/selectors'
import { mapIsOverviewShown } from '../overview/selectors'
import { mapIsTipsShown } from '../tips/selectors'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../toggle/selectors'
import {
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanCarouselMount
} from '../viewport/selectors'

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
    mapIsLogueOverviewShown,
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
        isLogueOverviewShown,
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
        isLogueOverviewShown,
        isOverviewShown,
        isTipsShown
    })
)
