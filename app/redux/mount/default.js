import {
    getCanCarouselMount,
    getCanScoreMount,
    getCanSliderMount
} from '../../helpers/resize/mount'
import {
    INITIAL_WINDOW_HEIGHT,
    INITIAL_DEVICE_WIDTH_INDEX,
    IS_INITIAL_HEIGHTLESS_LYRIC
} from '../viewport/default'

export const CAN_INITIAL_CAROUSEL_MOUNT = getCanCarouselMount({
    deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
    windowHeight: INITIAL_WINDOW_HEIGHT,
    isHeightlessLyric: IS_INITIAL_HEIGHTLESS_LYRIC
})

export const MOUNT_DEFAULTS = {
    canCarouselMount: CAN_INITIAL_CAROUSEL_MOUNT,
    canScoreMount: getCanScoreMount(INITIAL_DEVICE_WIDTH_INDEX),
    canSliderMount: getCanSliderMount(INITIAL_DEVICE_WIDTH_INDEX)
}
