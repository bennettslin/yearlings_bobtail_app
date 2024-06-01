import { createSelector } from 'reselect'
import {
    getAlignForScroll,
    getCanCarouselAccessShow,
    getCanLyricScroll,
} from '../../helpers/scroll'
import { mapIsPlaying } from '../audio/selector'
import {
    mapIsMonitorWidth,
    mapIsDesktopWidth,
} from '../device/selector'
import { mapSelectedDotsBit } from '../dots/selector'
import {
    mapIsLyricLogue,
    mapLyricAnnotationIndex,
} from '../lyric/selector'
import {
    mapScrollLyricAlways,
    mapIsAutoScrollLyricForPlay,
} from '../scrollLyric/selector'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded,
    mapIsDotsSlideShown,
    mapIsNavExpanded,
    mapIsCarouselExpanded,
} from '../toggle/selector'
import {
    mapWindowWidth,
    mapIsHeightlessLyric,
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
        isLyricExpanded,
    ) => getAlignForScroll({
        isCarousel,
        windowWidth,
        isDesktopWidth,
        isMonitorWidth,
        isLyricExpanded,
    }),
)

export const getMapCanCarouselAccessShow = inLyric => createSelector(
    mapSelectedDotsBit,
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsCarouselExpanded,
    mapIsNavExpanded,
    (
        selectedDotsBit,
        lyricAnnotationIndex,
        isLyricLogue,
        isDotsSlideShown,
        isLyricExpanded,
        isCarouselExpanded,
        isNavExpanded,
    ) => getCanCarouselAccessShow({
        inLyric,
        selectedDotsBit,
        lyricAnnotationIndex,
        isLyricLogue,
        isDotsSlideShown,
        isLyricExpanded,
        isCarouselExpanded,
        isNavExpanded,
    }),
)

export const mapCanLyricScroll = createSelector(
    mapIsPlaying,
    mapIsLyricLogue,
    mapScrollLyricAlways,
    mapIsAutoScrollLyricForPlay,
    mapIsAutoScroll,
    mapIsLyricExpanded,
    mapIsHeightlessLyric,
    (
        isPlaying,
        isLyricLogue,
        scrollLyricAlways,
        isAutoScrollLyricForPlay,
        isAutoScroll,
        isLyricExpanded,
        isHeightlessLyric,
    ) => getCanLyricScroll({
        isPlaying,
        isLyricLogue,
        scrollLyricAlways,
        isAutoScrollLyricForPlay,
        isAutoScroll,
        isLyricExpanded,
        isHeightlessLyric,
    }),
)
