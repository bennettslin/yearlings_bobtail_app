import { PHONE_WIDTH_OBJECT,
         MINI_WIDTH_OBJECT,
         TABLET_WIDTH_OBJECT,
         LAPTOP_WIDTH_OBJECT,
         MONITOR_WIDTH_OBJECT,
         DEVICE_WIDTH_OBJECTS,
         HEIGHTLESS_LYRIC_MAX } from 'helpers/constants'
import { getSong } from 'helpers/album-view-helper'

export const resizeWindow = (target = window, presentWidth) => {

    const newState = {
            windowHeight: target.innerHeight        }

    let deviceWidth,
        innerWidth = target.innerWidth,
        index = 0,
        manualWidth

    if (!presentWidth) {
        while (index < DEVICE_WIDTH_OBJECTS.length - 1 && innerWidth > DEVICE_WIDTH_OBJECTS[index].maxWidth) {
            index++
        }

        deviceWidth = DEVICE_WIDTH_OBJECTS[index].className
        manualWidth = false

    // Called from admin toggle.
    } else {
        let nextDeviceObject

        while (index < DEVICE_WIDTH_OBJECTS.length && !deviceWidth) {
            if (presentWidth === DEVICE_WIDTH_OBJECTS[index].className) {
                index = index

                nextDeviceObject = DEVICE_WIDTH_OBJECTS[(index + 1) % DEVICE_WIDTH_OBJECTS.length]

                deviceWidth = nextDeviceObject.className

                /**
                 * Show max width as inner width, arbitrary big number for monitor
                 * width.
                 */
                innerWidth = nextDeviceObject.maxWidth || 5000

            } else {
                index++
            }
        }

        manualWidth = true
    }

    newState.deviceWidth = deviceWidth
    newState.windowWidth = innerWidth
    newState.manualWidth = manualWidth

    return newState
}

export const getIsPhone = ({ deviceWidth }) => {
    return deviceWidth === PHONE_WIDTH_OBJECT.className
}

export const getShowSingleBookColumn = (state) => {
    const { deviceWidth,
            windowWidth } = state

    if (deviceWidth === MONITOR_WIDTH_OBJECT.className) {
        return windowWidth < MONITOR_WIDTH_OBJECT.doubleColumnShrinkBreakpoint

    } else if (deviceWidth === LAPTOP_WIDTH_OBJECT.className) {
        return windowWidth < LAPTOP_WIDTH_OBJECT.doubleColumnShrinkBreakpoint

    } else {
        return windowWidth < TABLET_WIDTH_OBJECT.doubleColumnShrinkBreakpoint
    }
}

const _getShrinkNavIconForDeviceWidthObject = (windowWidth, deviceWidthObject) => {
    const { doubleColumnStaticBreakpoint,
            doubleColumnShrinkBreakpoint,
            singleColumnStaticBreakpoint } = deviceWidthObject
    return windowWidth < singleColumnStaticBreakpoint || (windowWidth >= doubleColumnShrinkBreakpoint && windowWidth < doubleColumnStaticBreakpoint)
}

const _getDotsTipsInMainForDeviceWidthObject = (windowWidth, deviceWidthObject) => {
    const { dotsTipsInMainBreakpoint } = deviceWidthObject
    return windowWidth < dotsTipsInMainBreakpoint
}


export const getShrinkNavIcon = (state) => {
    const { deviceWidth,
            windowWidth } = state

    if (deviceWidth === MONITOR_WIDTH_OBJECT.className) {
        return _getShrinkNavIconForDeviceWidthObject(windowWidth, MONITOR_WIDTH_OBJECT)

    } else if (deviceWidth === LAPTOP_WIDTH_OBJECT.className) {
        return _getShrinkNavIconForDeviceWidthObject(windowWidth, LAPTOP_WIDTH_OBJECT)

    } else {
        return _getShrinkNavIconForDeviceWidthObject(windowWidth, TABLET_WIDTH_OBJECT)
    }
}

export const getIsLyricExpandable = ({ isAdmin, deviceWidth }) => {
    return !isAdmin && (deviceWidth === PHONE_WIDTH_OBJECT.className || deviceWidth === MINI_WIDTH_OBJECT.className || deviceWidth === TABLET_WIDTH_OBJECT.className)
}

export const getShowSingleLyricColumn = (props, state) => {
    // if is admin, return showSingleLyricColumn
    if (state.isAdmin) {
        return state.showSingleLyricColumnInAdmin

    } else {
        const selectedSong = getSong(props),
            { hasSideStanzas,
              isDoublespeaker,
              forceSingleColumn } = selectedSong,
            { deviceWidth } = state

        let showSingleLyricColumn = false

        // Applies to Vegan Proclamation.
        if (forceSingleColumn) {
            showSingleLyricColumn = true

        // Applies to Uncanny Valley Boy.
        } else if (hasSideStanzas && !isDoublespeaker) {
            return deviceWidth === PHONE_WIDTH_OBJECT.className

        // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
        } else if (isDoublespeaker) {
            /**
             * In tablet width, lyrics section takes up full width of bottom,
             * while in monitor width, the screen is wide enough as well.
             */
            return deviceWidth !== MONITOR_WIDTH_OBJECT.className && deviceWidth !== TABLET_WIDTH_OBJECT.className
        }

        return showSingleLyricColumn
    }
}

export const getIsHeightlessLyricColumn = (state) => {
    return getIsLyricExpandable(state) && state.windowHeight < HEIGHTLESS_LYRIC_MAX
}

export const getDotsTipsInMain = (state) => {
    const { deviceWidth,
            windowWidth } = state

    if (deviceWidth === MONITOR_WIDTH_OBJECT.className) {
        return _getDotsTipsInMainForDeviceWidthObject(windowWidth, MONITOR_WIDTH_OBJECT)

    } else if (deviceWidth === LAPTOP_WIDTH_OBJECT.className) {
        return _getDotsTipsInMainForDeviceWidthObject(windowWidth, LAPTOP_WIDTH_OBJECT)

    } else if (deviceWidth === PHONE_WIDTH_OBJECT.className) {
        return true

    } else {
        return _getDotsTipsInMainForDeviceWidthObject(windowWidth, TABLET_WIDTH_OBJECT)
    }
}
