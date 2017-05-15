import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH,

         MINI_OBJECT,
         DEVICE_OBJECTS,

         GOLDEN_CORD_WIDTH,
         UNCANNY_VALLEY_WIDTH,
         CAROUSEL_ANNOTATION_WIDTH,

         HEIGHTLESS_LYRIC_MIN,
         HEIGHTLESS_LYRIC_MAX,
         HIDDEN_NAV_MIN,
         MENU_HEIGHT,
         MENU_PHONE_HEIGHT,
         COLLAPSED_LYRIC_SECTION_HEIGHT,
         WIKI_SIDE_PADDING_TOTAL } from './constants'

import { getSong } from './album-view-helper'

export const resizeWindow = (target = window) => {

    const newState = { windowHeight: target.innerHeight }

    let innerWidth = target.innerWidth,
        index = 0

    if (typeof presentIndex === 'undefined') {
        while (index < DEVICE_OBJECTS.length - 1 && innerWidth > DEVICE_OBJECTS[index].maxWidth) {
            index++
        }
    }

    // TODO: Nav section cannot be accessed if new device width is phone?

    newState.deviceIndex = index
    newState.windowWidth = innerWidth

    return newState
}

export const getIsPhone = ({ deviceIndex }) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_WIDTH
}

export const getIsMini = ({ deviceIndex }) => {
    return DEVICE_OBJECTS[deviceIndex].className === MINI_WIDTH
}

export const getIsMonitor = ({ deviceIndex }) => {
    return DEVICE_OBJECTS[deviceIndex].className === MONITOR_WIDTH
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

    if (deviceClassName === LAPTOP_WIDTH || deviceClassName === MINI_WIDTH || deviceClassName === PHONE_WIDTH) {
        // Value for phone doesn't matter. Just keeps it from breaking.
        return true
    } else {
        return windowWidth < deviceObject.doubleColumnShrinkBreakpoint
    }
}

const _getShrinkNavIconForDeviceObject = (windowWidth, deviceObject) => {
    const { doubleColumnStaticBreakpoint,
            doubleColumnShrinkBreakpoint,
            singleColumnStaticBreakpoint } = deviceObject
    return windowWidth < singleColumnStaticBreakpoint ||
        ((doubleColumnShrinkBreakpoint && windowWidth >= doubleColumnShrinkBreakpoint) &&
        (doubleColumnStaticBreakpoint && windowWidth < doubleColumnStaticBreakpoint))
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

export const getIsCarouselExpandable = ({ deviceIndex }) => {
    return !getIsPhone({ deviceIndex })
}

export const getIsLyricExpandable = ({ deviceIndex }) => {
    return !getIsDesktop(deviceIndex)
}

export const getShowSingleLyricColumn = (props, state, nextSongIndex) => {
    const songIndex = !isNaN(nextSongIndex) ? nextSongIndex : props.selectedSongIndex,
        selectedSong = getSong(props, songIndex),
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

export const getIsHiddenNav = (state) => {
    const { windowHeight } = state

    return getIsPhone(state) || windowHeight < HIDDEN_NAV_MIN
}

export const getIsHeightlessLyricColumn = (state) => {
    const { windowWidth,
            windowHeight } = state

    return getIsLyricExpandable(state) &&

        // It is never heightless when above the max...
        windowHeight < HEIGHTLESS_LYRIC_MAX &&

        // It is always heightless when below the min...
        (windowHeight < HEIGHTLESS_LYRIC_MIN ||

        // Otherwise, it is heightless when width exceeds height.
        windowWidth > windowHeight)
}

export const getScoresTipsOutsideMenu = (state) => {
    const { deviceIndex,
            windowWidth } = state,
        deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (deviceObject.className === PHONE_WIDTH) {
        return true
    } else if (deviceObject.className === TABLET_WIDTH) {
        return false
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

export const getCarouselTopAlign = (state) => {

    // If in desktop or lyric column is expanded, set closer to top.
    if (getIsDesktop(state.deviceIndex) || state.isLyricExpanded) {
        return {
            top: 0.33
        }

    // Otherwise set halfway, which is the default.
    } else {
        return null
    }
}

export const getCarouselLeftAlign = (state) => {

    // If mobile, then set halfway, which is the default.
    if (!getIsDesktop(state.deviceIndex)) {
        return null

    } else {
        const lyricColumnWidth = getIsMonitor(state) ? GOLDEN_CORD_WIDTH : UNCANNY_VALLEY_WIDTH,
            centreFieldWidth = state.windowWidth - lyricColumnWidth,
            left = (centreFieldWidth * 0.5) / state.windowWidth,

            // Don't know why it's not perfectly centred, but whatever.
            leftOffset = -CAROUSEL_ANNOTATION_WIDTH * left

        return {
            left,
            leftOffset
        }
    }
}
