import { createSelector } from 'reselect'
import {
    getAlignForScroll,
    getCanLyricScroll
} from '../../helpers/scroll'
import { mapIsPlaying } from '../audio/selector'
import {
    mapIsMonitorWidth,
    mapIsDesktopWidth
} from '../device/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import {
    mapScrollLyricAlways,
    mapScrollLyricFromAutoScroll
} from '../scrollLyric/selector'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded,
    mapIsCarouselShown
} from '../toggle/selector'
import {
    mapWindowWidth,
    mapIsHeightlessLyric
} from '../viewport/selector'

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

export const mapCanCarouselScroll = createSelector(
    mapIsCarouselShown,
    mapIsLyricLogue,
    (
        isCarouselShown,
        isLyricLogue
    ) => (
        !isLyricLogue &&
        isCarouselShown
    )
)

export const mapCanLyricScroll = createSelector(
    mapIsPlaying,
    mapIsLyricLogue,
    mapScrollLyricAlways,
    mapScrollLyricFromAutoScroll,
    mapIsAutoScroll,
    mapIsLyricExpanded,
    mapIsHeightlessLyric,
    (
        isPlaying,
        isLyricLogue,
        scrollLyricAlways,
        scrollLyricFromAutoScroll,
        isAutoScroll,
        isLyricExpanded,
        isHeightlessLyric
    ) => getCanLyricScroll({
        isPlaying,
        isLyricLogue,
        scrollLyricAlways,
        scrollLyricFromAutoScroll,
        isAutoScroll,
        isLyricExpanded,
        isHeightlessLyric
    })
)
