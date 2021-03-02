import { createSelector } from 'reselect'
import { getIsShelfLeftShown } from '../../helpers/main'
import { getMainHeightStyle } from '../../helpers/resize/section'
import { mapIsActivated } from '../activated/selector'
import {
    mapIsPhoneWidth,
    mapIsDesktopWidth,
} from '../device/selector'
import { mapIsSongChangeDone } from '../entrance/selector'
import {
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
} from '../lyric/selector'
import { mapLyricDynamicHeight } from '../lyricHeight/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
} from '../toggle/selector'
import {
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanCarouselNavMount,
} from '../viewport/selector'

export const mapMainHeightStyle = createSelector(
    mapCanCarouselNavMount,
    mapLyricDynamicHeight,
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapIsDesktopWidth,
    (
        canCarouselNavMount,
        lyricDynamicHeight,
        isHeightlessLyric,
        menuHeight,
        isDesktopWidth,
    ) => getMainHeightStyle({
        canCarouselNavMount,
        lyricDynamicHeight,
        isHeightlessLyric,
        menuHeight,
        isDesktopWidth,
    }),
)

export const mapIsShelfLeftShown = createSelector(
    mapIsPhoneWidth,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsOverlayShown,
    mapIsSongChangeDone,
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
        isSongChangeDone,
        lyricAnnotationIndex,
        isLyricLogue,
        isOverviewShown,
        isTipsShown,
    ) => getIsShelfLeftShown({
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        isSongChangeDone,
        lyricAnnotationIndex,
        isLyricLogue,
        isOverviewShown,
        isTipsShown,
    }),
)
