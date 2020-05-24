import {
    getWindowDimensions,
    getDeviceWidthIndex
} from '../../helpers/resize/device'
import {
    getIsDesktopWidth,
    getIsTabletWidth,
    getIsPhoneWidth
} from '../../helpers/responsive'

export const {
    windowWidth: INITIAL_WINDOW_WIDTH,
    windowHeight: INITIAL_WINDOW_HEIGHT
} = getWindowDimensions()

export const INITIAL_DEVICE_WIDTH_INDEX =
    getDeviceWidthIndex(INITIAL_WINDOW_WIDTH)

export const VIEWPORT_DEFAULTS = {
    windowWidth: INITIAL_WINDOW_WIDTH,
    windowHeight: INITIAL_WINDOW_HEIGHT,
    deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
    isPhoneWidth: getIsPhoneWidth(INITIAL_DEVICE_WIDTH_INDEX),
    isTabletWidth: getIsTabletWidth(INITIAL_DEVICE_WIDTH_INDEX),
    isDesktopWidth: getIsDesktopWidth(INITIAL_DEVICE_WIDTH_INDEX)
}
