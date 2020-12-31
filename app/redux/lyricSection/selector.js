import { createSelector } from 'reselect'
import { getLyricSectionRect } from '../../helpers/resize/section'
import { mapIsDesktopWidth } from '../device/selector'
import { mapIsLyricExpandable } from '../lyricExpand/selector'
import { mapLyricDynamicHeight } from '../lyricHeight/selector'
import { mapIsLyricExpanded } from '../toggle/selector'
import {
    mapWindowHeight,
    mapMenuHeight,
    mapCanSliderMount,
} from '../viewport/selector'

export const mapLyricSectionRect = createSelector(
    mapIsLyricExpandable,
    mapCanSliderMount,
    mapIsDesktopWidth,
    mapWindowHeight,
    mapIsLyricExpanded,
    mapLyricDynamicHeight,
    mapMenuHeight,
    (
        isLyricExpandable,
        canSliderMount,
        isDesktopWidth,
        windowHeight,
        isLyricExpanded,
        lyricDynamicHeight,
        menuHeight
    ) => getLyricSectionRect({
        isLyricExpandable,
        canSliderMount,
        isDesktopWidth,
        windowHeight,
        isLyricExpanded,
        lyricDynamicHeight,
        menuHeight,
    })
)
