import {
    PHONE_WIDTH_KEY,
    MINI_WIDTH_KEY,
    TABLET_WIDTH_KEY,
    LAPTOP_WIDTH_KEY,
    MONITOR_WIDTH_KEY,
    DEVICE_WIDTH_CONFIGS
} from 'constants/responsive/deviceWidth'

export const getIsPhoneWidth = (deviceWidthIndex) => {
    const { deviceWidthKey } = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]
    return deviceWidthKey === PHONE_WIDTH_KEY
}

export const getIsMiniWidth = (deviceWidthIndex) => {
    const { deviceWidthKey } = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]
    return deviceWidthKey === MINI_WIDTH_KEY
}

export const getIsTabletWidth = (deviceWidthIndex) => {
    const { deviceWidthKey } = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]
    return deviceWidthKey === TABLET_WIDTH_KEY
}

export const getIsLaptopWidth = (deviceWidthIndex) => {
    const { deviceWidthKey } = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]
    return deviceWidthKey === LAPTOP_WIDTH_KEY
}

export const getIsMonitorWidth = (deviceWidthIndex) => {
    const { deviceWidthKey } = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]
    return deviceWidthKey === MONITOR_WIDTH_KEY
}

export const getIsDesktopWidth = (deviceWidthIndex) => {
    return (
        getIsLaptopWidth(deviceWidthIndex) ||
        getIsMonitorWidth(deviceWidthIndex)
    )
}
