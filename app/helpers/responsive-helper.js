import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH,

         MINI_OBJECT,
         DEVICE_OBJECTS,

         HEIGHTLESS_LYRIC_MAX,
         MENU_HEIGHT,
         MENU_PHONE_HEIGHT,
         COLLAPSED_LYRIC_SECTION_HEIGHT,
         WIKI_SIDE_PADDING_TOTAL } from 'helpers/constants'

import { getSong } from 'helpers/album-view-helper'

export const resizeWindow = (target = window, presentIndex) => {

    const newState = { windowHeight: target.innerHeight }

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

export const getIsMini = ({ deviceIndex }) => {
    return DEVICE_OBJECTS[deviceIndex].className === MINI_WIDTH
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

const _getScoresTipsOutsideMenuForDeviceObject = (windowWidth, deviceObject) => {
    const { scoresTipsOutsideMenuBreakpoint } = deviceObject
    return windowWidth < scoresTipsOutsideMenuBreakpoint
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

export const getShowSingleLyricColumn = (props, state, selectedSongIndex) => {
    if (state.isAdmin) {
        return state.showSingleLyricColumnInAdmin

    } else {
        const selectedSong = getSong(props, selectedSongIndex),
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

export const getScoresTipsOutsideMenu = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (deviceObject.className === PHONE_WIDTH) {
        return true
    } else {
        return _getScoresTipsOutsideMenuForDeviceObject(windowWidth, deviceObject)
    }
}

export const getTitleInAudio = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === MINI_WIDTH && windowWidth < MINI_OBJECT.titleInAudioBreakpoint
}

export const getLyricSectionRect = (state) => {
    const { deviceIndex,
            windowHeight,
            isLyricExpanded } = state,
        deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
        bottom = windowHeight

    if (deviceClassName === MONITOR_WIDTH || deviceClassName === LAPTOP_WIDTH) {
        /**
         * If monitor or laptop width, then lyric section rect is simply the
         * entire window height.
         */
        return {
            top: 0,
            bottom
        }

    } else {
        const isPhone = deviceClassName === PHONE_WIDTH,
            menuHeight = isPhone ? MENU_PHONE_HEIGHT : MENU_HEIGHT,
            top = isLyricExpanded ? menuHeight : windowHeight * (1 - COLLAPSED_LYRIC_SECTION_HEIGHT)

        // TODO: Consider lyric hidden?
        return {
            top,
            bottom
        }
    }
}

export const getIsMobileWiki = (state) => {

    // If phone or mini, show mobile wiki.
    if (getIsPhone(state) || getIsMini(state)) {
        return true

    } else {
        const { windowWidth } = state,

        // Wikipedia in mobile seems to max out at 892px.
        isMobileWiki = windowWidth - WIKI_SIDE_PADDING_TOTAL < 892

        return isMobileWiki
    }
}
