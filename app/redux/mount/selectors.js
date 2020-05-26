import { getLyricDynamicHeight } from '../../helpers/resize/mount'

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
