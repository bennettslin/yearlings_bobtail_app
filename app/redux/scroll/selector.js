import { createSelector } from 'reselect'
import {
    getAlignForScroll,
    getCanCarouselAccessShow,
    getCanLyricScroll
} from '../../helpers/scroll'
import { mapIsPlaying } from '../audio/selector'
import {
    mapIsMonitorWidth,
    mapIsDesktopWidth
} from '../device/selector'
import { mapSelectedDotsBit } from '../dots/selector'
import {
    mapIsLyricLogue,
    mapLyricAnnotationIndex
} from '../lyric/selector'
import {
    mapScrollLyricAlways,
    mapScrollLyricFromAutoScroll
} from '../scrollLyric/selector'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded,
    mapIsCarouselExpanded,
    mapIsNavExpanded,
    mapIsDotsSlideShown
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

export const getMapCanCarouselAccessShow = inLyric => createSelector(
    mapIsCarouselExpanded,
    mapSelectedDotsBit,
    mapIsLyricLogue,
    mapLyricAnnotationIndex,
    mapIsNavExpanded,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    (
        isCarouselExpanded,
        selectedDotsBit,
        isLyricLogue,
        lyricAnnotationIndex,
        isNavExpanded,
        isDotsSlideShown,
        isLyricExpanded
    ) => getCanCarouselAccessShow({
        inLyric,
        isCarouselExpanded,
        selectedDotsBit,
        isLyricLogue,
        lyricAnnotationIndex,
        isNavExpanded,
        isDotsSlideShown,
        isLyricExpanded
    })
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
