import {
    PHONE_CLASS,
    LS_MINI_CLASS,
    TABLET_CLASS,
    LS_LAPTOP_CLASS,
    MONITOR_CLASS,
    DEVICE_OBJECTS
} from 'constants/responsive'

export const getIsDesktop = (deviceIndex) => {
    const deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === LS_LAPTOP_CLASS || deviceClassName === MONITOR_CLASS
}

export const getIsPhone = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_CLASS
}

export const getIsMini = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === LS_MINI_CLASS
}

export const getIsTablet = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === TABLET_CLASS
}

export const getIsMonitor = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === MONITOR_CLASS
}
