import { createSelector } from 'reselect'
import {
    mapIsMonitorWidth,
    mapIsDesktopWidth
} from '../device/selector'
import { mapIsLyricExpanded } from '../toggle/selector'
import { mapWindowWidth } from '../viewport/selector'
import { getAlignForScroll } from '../../helpers/scroll'

export const getMapAlignForScroll = isCarousel => createSelector(
    mapWindowWidth,
    mapIsDesktopWidth,
    mapIsMonitorWidth,
    mapIsLyricExpanded,
    (
        windowWidth,
        isDesktopWidth,
        isMonitorWidth,
        isLyricExpanded
    ) => getAlignForScroll({
        isCarousel,
        windowWidth,
        isDesktopWidth,
        isMonitorWidth,
        isLyricExpanded
    })
)
