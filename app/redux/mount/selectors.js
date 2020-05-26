import { createSelector } from 'reselect'
import {
    getLyricDynamicHeight,
    getLyricOverviewHeight
} from '../../helpers/resize/mount'

export const CAN_SCORE_MOUNT_SELECTOR =
    ({ mountStore: { canScoreMount } }) => canScoreMount

export const CAN_SLIDER_MOUNT_SELECTOR =
    ({ mountStore: { canSliderMount } }) => canSliderMount

export const LYRIC_DYNAMIC_HEIGHT_SELECTOR = ({
    mountStore: { canCarouselMount },
    responsiveStore: {
        isHeightlessLyric,
        menuHeight
    },
    stageStore: { stageHeight },
    viewportStore: {
        deviceWidthIndex,
        windowHeight
    }

}) => getLyricDynamicHeight({
    canCarouselMount,
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    isHeightlessLyric,
    menuHeight
})

export const LYRIC_OVERVIEW_HEIGHT_STYLE_SELECTOR = createSelector(
    LYRIC_DYNAMIC_HEIGHT_SELECTOR,
    ({
        responsiveStore: {
            isHeightlessLyric,
            menuHeight
        },
        toggleStore: { isLyricExpanded },
        lyricStore: { isLyricLogue }

    }) => ({
        isLyricExpanded,
        isLyricLogue,
        isHeightlessLyric,
        menuHeight
    }),
    (
        lyricDynamicHeight,
        {
            isLyricExpanded,
            isLyricLogue,
            isHeightlessLyric,
            menuHeight
        }
    ) => getLyricOverviewHeight({
        isLyricExpanded,
        lyricDynamicHeight,
        isLyricLogue,
        isHeightlessLyric,
        menuHeight
    })
)
