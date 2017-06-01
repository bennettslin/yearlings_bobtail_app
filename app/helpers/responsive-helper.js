import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH,

         MINI_OBJECT,
         DEVICE_OBJECTS,

         CAROUSEL_ANNOTATION_WIDTH,
         GOLDEN_CORD_WIDTH,
         UNCANNY_VALLEY_WIDTH,

         COLLAPSED_LYRIC_SECTION_HEIGHT,
         HEIGHTLESS_LYRIC_MIN,
         HEIGHTLESS_LYRIC_MAX,
         MENU_HEIGHT,
         MENU_PHONE_HEIGHT,
         HIDDEN_NAV_MIN,
         WIKI_SIDE_PADDING_TOTAL } from '../constants/responsive'

import { getSongObject } from './data-helper'

export const resizeWindow = (target = window) => {

    const newState = { windowHeight: target.innerHeight }

    let innerWidth = target.innerWidth,
        deviceIndex = 0

    if (typeof presentIndex === 'undefined') {
        while (deviceIndex < DEVICE_OBJECTS.length - 1 && innerWidth > DEVICE_OBJECTS[deviceIndex].maxWidth) {
            deviceIndex++
        }
    }

    newState.deviceIndex = deviceIndex
    newState.windowWidth = innerWidth

    return newState
}

export const getIsPhone = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_WIDTH
}

const _getIsMini = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === MINI_WIDTH
}

const _getIsTablet = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === TABLET_WIDTH
}

const _getIsMonitor = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === MONITOR_WIDTH
}

export const getIsDesktop = (deviceIndex) => {
    const deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === LAPTOP_WIDTH || deviceClassName === MONITOR_WIDTH
}

export const getShowSingleBookColumn = ({ deviceIndex, windowWidth }) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (!_getIsMonitor(deviceIndex) && !_getIsTablet(deviceIndex)) {
        // Value for phone doesn't matter. Just keeps it from breaking.
        return true

    } else {
        return windowWidth < deviceObject.doubleColumnShrinkBreakpoint
    }
}

const _getShowShrunkNavIconForDeviceObject = (windowWidth, deviceObject) => {
    const { doubleColumnStaticBreakpoint,
            doubleColumnShrinkBreakpoint,
            singleColumnStaticBreakpoint } = deviceObject

    return windowWidth < singleColumnStaticBreakpoint ||
        ((doubleColumnShrinkBreakpoint && windowWidth >= doubleColumnShrinkBreakpoint) &&
        (doubleColumnStaticBreakpoint && windowWidth < doubleColumnStaticBreakpoint))
}

const _getIsScoresTipsInMainForDeviceObject = (windowWidth, deviceObject) => {
    const { isScoresTipsInMainBreakpoint } = deviceObject
    return windowWidth < isScoresTipsInMainBreakpoint
}


export const getShowShrunkNavIcon = ({ deviceIndex, windowWidth }) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex],
        isPhoneOrMini = getIsPhone(deviceIndex) || _getIsMini(deviceIndex)

    return _getShowShrunkNavIconForDeviceObject(windowWidth, isPhoneOrMini ? MINI_OBJECT : deviceObject)
}

export const getIsCarouselExpandable = (deviceIndex) => {
    return !getIsPhone(deviceIndex)
}

export const getIsLyricExpandable = (deviceIndex) => {
    return !getIsDesktop(deviceIndex)
}

export const getShowOneOfTwoLyricColumns = (songIndex, deviceIndex) => {

    const selectedSong = getSongObject(songIndex),
        { hasSideStanzas,
          isDoublespeaker } = selectedSong

    // Applies to Uncanny Valley Boy.
    if (hasSideStanzas && !isDoublespeaker) {
        return getIsPhone(deviceIndex)

    // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
    } else if (isDoublespeaker) {
        /**
         * In tablet width, lyrics section takes up full width of bottom,
         * while in monitor width, the screen is wide enough as well.
         */
        return !_getIsMonitor(deviceIndex) && !_getIsTablet(deviceIndex)

    // Doesn't apply to other songs.
    } else {
        return false
    }
}

export const getIsHiddenNav = ({ deviceIndex, windowHeight }) => {
    return getIsPhone(deviceIndex) || windowHeight < HIDDEN_NAV_MIN
}

export const getIsHeightlessLyricColumn = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {
    return getIsLyricExpandable(deviceIndex) &&

        // It is never heightless when above the max...
        windowHeight < HEIGHTLESS_LYRIC_MAX &&

        // It is always heightless when below the min...
        (windowHeight < HEIGHTLESS_LYRIC_MIN ||

        // Otherwise, it is heightless when width exceeds height.
        windowWidth > windowHeight)
}

export const getIsScoresTipsInMain = ({ deviceIndex, windowWidth }) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (getIsPhone(deviceIndex)) {
        return true

    } else if (_getIsTablet(deviceIndex)) {
        return false

    } else {
        return _getIsScoresTipsInMainForDeviceObject(windowWidth, deviceObject)
    }
}

export const getIsTitleInAudio = ({ deviceIndex, windowWidth }) => {

    return _getIsMini(deviceIndex) && windowWidth < MINI_OBJECT.isTitleInAudioBreakpoint
}

export const getLyricSectionRect = ({
    deviceIndex,
    windowHeight,
    isLyricExpanded
}) => {
    const bottom = windowHeight

    if (getIsDesktop(deviceIndex)) {
        /**
         * If monitor or laptop width, then lyric section rect is simply the
         * entire window height.
         */
        return {
            top: 0,
            bottom
        }

    } else {
        const isPhone = getIsPhone(deviceIndex),
            menuHeight = isPhone ? MENU_PHONE_HEIGHT : MENU_HEIGHT,
            top = isLyricExpanded ? menuHeight : windowHeight * (1 - COLLAPSED_LYRIC_SECTION_HEIGHT)

        // TODO: Consider lyric hidden?
        return {
            top,
            bottom
        }
    }
}

export const getIsMobileWiki = ({ deviceIndex, windowWidth }) => {

    // If phone or mini, show mobile wiki.
    if (getIsPhone(deviceIndex) || _getIsMini(deviceIndex)) {
        return true

    } else {
        // Wikipedia in mobile seems to max out at 892px.
        const isMobileWiki = windowWidth - WIKI_SIDE_PADDING_TOTAL < 892

        return isMobileWiki
    }
}

export const getCarouselTopAlign = (deviceIndex, isLyricExpanded) => {

    // If in desktop or lyric column is expanded, set closer to top.
    if (getIsDesktop(deviceIndex) || isLyricExpanded) {
        return {
            top: 0.33
        }

    // Otherwise set halfway, which is the default.
    } else {
        return null
    }
}

export const getCarouselLeftAlign = (deviceIndex, windowWidth, index) => {

    // If mobile, then set halfway, which is the default.
    if (!getIsDesktop(deviceIndex)) {
        return null

    } else {
        const lyricColumnWidth = _getIsMonitor(deviceIndex) ?
                GOLDEN_CORD_WIDTH : UNCANNY_VALLEY_WIDTH,
            centreFieldWidth = windowWidth - lyricColumnWidth,
            left = (centreFieldWidth * 0.5) / windowWidth,

            // TODO: Don't know why it's not perfectly centred, but whatever.
            /**
             * The first annotation card is really just the buffer margin. The
             * next one is the first real annotation. There won't be any offset
             * in either case.
             */
            leftOffset = index <= 1 ? 0 : -CAROUSEL_ANNOTATION_WIDTH * left

        return {
            left,
            leftOffset
        }
    }
}
