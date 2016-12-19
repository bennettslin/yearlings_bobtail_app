import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH,

         PHONE_OBJECT,
         MINI_OBJECT,
         TABLET_OBJECT,
         LAPTOP_OBJECT,
         MONITOR_OBJECT,

         DEVICE_OBJECTS,

         HEIGHTLESS_LYRIC_MAX } from 'helpers/constants'
import { getSong } from 'helpers/album-view-helper'

export const resizeWindow = (target = window, presentIndex) => {

    const newState = {
            windowHeight: target.innerHeight        }

    let innerWidth = target.innerWidth,
        index = 0,
        manualWidth

    if (typeof presentIndex === 'undefined') {
        while (index < DEVICE_OBJECTS.length - 1 && innerWidth > DEVICE_OBJECTS[index].maxWidth) {
            index++
        }

        manualWidth = false

    // Called from admin toggle.
    } else {
        index = (presentIndex + 1) % DEVICE_OBJECTS.length

        /**
         * Show max width as inner width, arbitrary big number for monitor
         * width.
         */
        innerWidth = DEVICE_OBJECTS[index].maxWidth || 5000
        manualWidth = true
    }

    // TODO: Nav section cannot be accessed if new device width is phone?

    newState.deviceIndex = index
    newState.windowWidth = innerWidth
    newState.manualWidth = manualWidth

    return newState
}

export const getIsPhone = ({ deviceIndex }) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_WIDTH
}

export const getIsDesktop = (deviceIndex) => {
    const deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === LAPTOP_WIDTH || deviceClassName === MONITOR_WIDTH
}

export const getShowSingleBookColumn = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceObject = DEVICE_OBJECTS[deviceIndex],
        deviceClassName = deviceObject.className

    if (deviceClassName === PHONE_WIDTH || deviceClassName === MINI_WIDTH) {
        return windowWidth < MINI_OBJECT.doubleColumnShrinkBreakpoint
    } else {
        return windowWidth < deviceObject.doubleColumnShrinkBreakpoint
    }
}

const _getShrinkNavIconForDeviceObject = (windowWidth, deviceObject) => {
    const { doubleColumnStaticBreakpoint,
            doubleColumnShrinkBreakpoint,
            singleColumnStaticBreakpoint } = deviceObject
    return windowWidth < singleColumnStaticBreakpoint || (windowWidth >= doubleColumnShrinkBreakpoint && windowWidth < doubleColumnStaticBreakpoint)
}

const _getdotsTipsOutsideMenuForDeviceObject = (windowWidth, deviceObject) => {
    const { dotsTipsOutsideMenuBreakpoint } = deviceObject
    return windowWidth < dotsTipsOutsideMenuBreakpoint
}


export const getShrinkNavIcon = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceObject = DEVICE_OBJECTS[deviceIndex],
        deviceClassName = deviceObject.className

    if (deviceClassName === PHONE_WIDTH || deviceClassName === MINI_WIDTH) {
        return _getShrinkNavIconForDeviceObject(windowWidth, MINI_OBJECT)
    } else {
        return _getShrinkNavIconForDeviceObject(windowWidth, deviceObject)
    }
}

export const getIsLyricExpandable = ({ isAdmin, deviceIndex }) => {
    return !isAdmin && !getIsDesktop(deviceIndex)
}

export const getShowSingleLyricColumn = (props, state) => {
    if (state.isAdmin) {
        return state.showSingleLyricColumnInAdmin

    } else {
        const selectedSong = getSong(props),
            { hasSideStanzas,
              isDoublespeaker,
              forceSingleColumn } = selectedSong,
            { deviceIndex } = state,
            deviceClassName = DEVICE_OBJECTS[deviceIndex].className

        let showSingleLyricColumn = false

        // Applies to Vegan Proclamation.
        if (forceSingleColumn) {
            showSingleLyricColumn = true

        // Applies to Uncanny Valley Boy.
        } else if (hasSideStanzas && !isDoublespeaker) {
            return deviceClassName === PHONE_WIDTH

        // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
        } else if (isDoublespeaker) {
            /**
             * In tablet width, lyrics section takes up full width of bottom,
             * while in monitor width, the screen is wide enough as well.
             */
            return deviceClassName !== MONITOR_WIDTH && deviceClassName !== TABLET_WIDTH
        }

        return showSingleLyricColumn
    }
}

export const getIsHeightlessLyricColumn = (state) => {
    return getIsLyricExpandable(state) && state.windowHeight < HEIGHTLESS_LYRIC_MAX
}

export const getdotsTipsOutsideMenu = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (deviceObject.className === PHONE_WIDTH) {
        return true
    } else {
        return _getdotsTipsOutsideMenuForDeviceObject(windowWidth, deviceObject)
    }
}

export const getTitleInAudio = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === MINI_WIDTH && windowWidth < MINI_OBJECT.titleInAudioBreakpoint
}
