import { HAS_SIDE_CARDS, IS_DOUBLESPEAKER } from 'constants/lyrics'
import { PHONE_CLASS,
    LS_MINI_CLASS,
    TABLET_CLASS,
    LS_LAPTOP_CLASS,
    MONITOR_CLASS,

    MINI_OBJECT,
    DEVICE_OBJECTS,

    LS_HEIGHT_LYRIC_COLLAPSED,
    HEIGHTLESS_LYRIC_MIN,
    HEIGHTLESS_LYRIC_MAX,

    LS_WIDTH_GOLDEN_CORD,
    LS_WIDTH_UNCANNY_VALLEY,

    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU_PHONE,
    LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU,

    TWO_ROW_MENU_BREAKPOINT_LAPTOP,
    TWO_ROW_MENU_BREAKPOINT_MINI,

    HIDDEN_NAV_MIN,
    WIKI_SIDE_PADDING_TOTAL } from 'constants/responsive'

import { getSongObject } from './dataHelper'

export const resizeWindow = (target = window) => {

    const newState = { windowHeight: target.innerHeight }

    let innerWidth = target.innerWidth,
        deviceIndex = 0

    while (deviceIndex < DEVICE_OBJECTS.length - 1 && innerWidth > DEVICE_OBJECTS[deviceIndex].maxWidth) {
        deviceIndex++
    }

    newState.deviceIndex = deviceIndex
    newState.windowWidth = innerWidth

    return newState
}

export const getIsDesktop = (deviceIndex) => {
    const deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === LS_LAPTOP_CLASS || deviceClassName === MONITOR_CLASS
}

export const getIsPhone = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_CLASS
}

const _getIsMini = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === LS_MINI_CLASS
}

const _getIsTablet = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === TABLET_CLASS
}

// const _getIsLaptop = (deviceIndex) => {
//     return DEVICE_OBJECTS[deviceIndex].className === LS_LAPTOP_CLASS
// }

export const getIsMonitor = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === MONITOR_CLASS
}

export const getIsTabletOrMini = (deviceIndex) => {
    return _getIsTablet(deviceIndex) || _getIsMini(deviceIndex)
}

export const getShowSingleBookColumn = ({ deviceIndex, windowWidth }) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (!getIsMonitor(deviceIndex) && !_getIsTablet(deviceIndex)) {
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

export const getShowShrunkNavIcon = ({ deviceIndex, windowWidth }) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex],
        isPhoneOrMini = getIsPhone(deviceIndex) || _getIsMini(deviceIndex)

    return _getShowShrunkNavIconForDeviceObject(windowWidth, isPhoneOrMini ? MINI_OBJECT : deviceObject)
}

export const getIsLyricExpandable = (deviceIndex) => {
    return !getIsDesktop(deviceIndex)
}

export const getIsScoreExpandable = (deviceIndex) => {
    return !getIsPhone(deviceIndex)
}

export const getIsToggleInOverview = (deviceIndex) => {
    return getIsPhone(deviceIndex)
}

export const getShowOneOfTwoLyricColumns = (songIndex, deviceIndex) => {
    const selectedSong = getSongObject(songIndex),
        { [HAS_SIDE_CARDS]: hasSideCards,
            [IS_DOUBLESPEAKER]: isDoublespeaker } = selectedSong

    // Applies to Uncanny Valley Boy.
    if (hasSideCards && !isDoublespeaker) {
        return getIsPhone(deviceIndex)

    // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
    } else if (isDoublespeaker) {
        /**
         * In tablet width, lyrics section takes up full width of bottom,
         * while in monitor width, the screen is wide enough as well.
         */
        return !getIsMonitor(deviceIndex) && !_getIsTablet(deviceIndex)

    // Doesn't apply to other songs.
    } else {
        return false
    }
}

export const getIsHiddenCarouselNav = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {
    // Hide carousel nav if it's a phone...
    const isHiddenCarouselNav = getIsPhone(deviceIndex) ||

    // If the height is below a minimum...
    windowHeight < HIDDEN_NAV_MIN ||

    // Or if it's a heightless mini.
    (_getIsMini(deviceIndex) && getIsHeightlessLyricColumn({
        deviceIndex,
        windowHeight,
        windowWidth
    }))

    return isHiddenCarouselNav
}

export const getIsHeightlessLyricColumn = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {

    // It is only ever heightless in mobile.
    return getIsLyricExpandable(deviceIndex) &&

        // It is never heightless when above the max of 720...
        windowHeight < HEIGHTLESS_LYRIC_MAX &&

        // It is always heightless when below the min of 540...
        (windowHeight < HEIGHTLESS_LYRIC_MIN ||

        // Otherwise, it is heightless when width exceeds height.
        windowWidth > windowHeight)
}

export const getIsOverlayingAnnotation = ({
    deviceIndex,
    isLyricExpanded
}) => {
    return (
        // Annotation is always in overlay if lyric is expanded...
        isLyricExpanded ||

        // Or if we are in phone.
        getIsPhone(deviceIndex)
    )
}

const _getIsScoresTipsInMainForDeviceObject = (windowWidth, deviceObject) => {
    const { isScoresTipsInMainBreakpoint } = deviceObject
    return windowWidth < isScoresTipsInMainBreakpoint
}

export const getIsScoresTipsInMain = ({ deviceIndex, windowWidth }) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (getIsMonitor(deviceIndex) || _getIsTablet(deviceIndex)) {
        return _getIsScoresTipsInMainForDeviceObject(windowWidth, deviceObject)
    } else {
        return true
    }
}

export const getIsTwoRowMenu = ({ deviceIndex, windowWidth }) => {

    const isDesktop = getIsDesktop(deviceIndex),
        twoRowMenuBreakpoint = isDesktop ?
            TWO_ROW_MENU_BREAKPOINT_LAPTOP : TWO_ROW_MENU_BREAKPOINT_MINI

    return windowWidth < twoRowMenuBreakpoint
}

export const getLyricSectionRect = ({

    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded

}) => {
    const bottom = windowHeight
    let top

    if (getIsDesktop(deviceIndex)) {
        /**
         * If monitor or laptop width, then lyric section rect is simply the
         * entire window height.
         */
        top = 0

    } else if (!isLyricExpanded) {
        /**
         * If lyric is collapsed, top is always a fixed percentage of the
         * window height.
         */
        top = windowHeight * (1 - LS_HEIGHT_LYRIC_COLLAPSED)

    } else if (getIsTwoRowMenu({ deviceIndex, windowWidth })) {

        if (_getIsMini(deviceIndex)) {
            top = LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU

        } else {
            top = LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU_PHONE
        }

    } else {
        // Lyric is expanded in tablet or mini.
        top = LS_HEIGHT_MENU
    }

    return {
        top,
        bottom
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

export const getLyricTopAlign = (deviceIndex, isLyricExpanded) => {

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

export const getCarouselLeftAlign = (
    deviceIndex,
    windowWidth
) => {

    // If mobile, then set halfway, which is the default.
    if (!getIsDesktop(deviceIndex)) {
        return null

    } else {
        const lyricColumnWidth = getIsMonitor(deviceIndex) ?
                LS_WIDTH_GOLDEN_CORD : LS_WIDTH_UNCANNY_VALLEY,

            centreFieldWidth = windowWidth - lyricColumnWidth,

            // Percentage. It would be 0.5 if not for the lyric column.
            left = (centreFieldWidth * 0.5) / windowWidth

        /**
         * Not sure why this doesn't exactly centre the annotation, but
         * whatever.
         */
        return {
            left
            // leftOffset
        }
    }
}

export const getMenuMarginInOverlay = (windowWidth) => {
    const margin = (windowWidth - MINI_OBJECT.maxWidth) / 2

    // Don't return a negative margin.
    return margin < 0 ? 0 : margin
}
