import {
    PHONE_WIDTH_KEY,
    LS_MINI_WIDTH_KEY,
    TABLET_WIDTH_KEY,
    LS_LAPTOP_WIDTH_KEY,
    MONITOR_WIDTH_KEY,
    DEVICE_WIDTH_CONFIGS
} from 'constants/responsive'

export const getIsDesktopWidth = (deviceWidthIndex) => {
    const deviceWidthKey = DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey

    return deviceWidthKey === LS_LAPTOP_WIDTH_KEY || deviceWidthKey === MONITOR_WIDTH_KEY
}

export const getIsPhoneWidth = (deviceWidthIndex) => {
    return DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey === PHONE_WIDTH_KEY
}

export const getIsMiniWidth = (deviceWidthIndex) => {
    return DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey === LS_MINI_WIDTH_KEY
}

export const getIsTabletWidth = (deviceWidthIndex) => {
    return DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey === TABLET_WIDTH_KEY
}

export const getIsMonitorWidth = (deviceWidthIndex) => {
    return DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey === MONITOR_WIDTH_KEY
}
