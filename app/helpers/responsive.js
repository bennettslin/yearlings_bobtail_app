import {
    PHONE_CLASS,
    LS_MINI_CLASS,
    TABLET_CLASS,
    LS_LAPTOP_CLASS,
    MONITOR_CLASS,
    DEVICE_OBJECTS
} from 'constants/responsive'

export const getIsDesktopWidth = (deviceIndex) => {
    const deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === LS_LAPTOP_CLASS || deviceClassName === MONITOR_CLASS
}

export const getIsPhoneWidth = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_CLASS
}

export const getIsMiniWidth = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === LS_MINI_CLASS
}

export const getIsTabletWidth = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === TABLET_CLASS
}

export const getIsMonitorWidth = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === MONITOR_CLASS
}
