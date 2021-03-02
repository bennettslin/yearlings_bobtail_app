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
    mapScrollLyricFromAutoScroll,
} from '../scrollLyric/selector'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded,
    mapIsCarouselShown,
    mapIsDotsSlideShown,
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
    mapIsCarouselShown,
    mapSelectedDotsBit,
    mapIsLyricLogue,
    mapLyricAnnotationIndex,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    (
        isCarouselShown,
        selectedDotsBit,
        isLyricLogue,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isLyricExpanded,
    ) => getCanCarouselAccessShow({
        inLyric,
        isCarouselShown,
        selectedDotsBit,
        isLyricLogue,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isLyricExpanded,
    }),
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
        isHeightlessLyric,
    ) => getCanLyricScroll({
        isPlaying,
        isLyricLogue,
        scrollLyricAlways,
        scrollLyricFromAutoScroll,
        isAutoScroll,
        isLyricExpanded,
        isHeightlessLyric,
    }),
)
