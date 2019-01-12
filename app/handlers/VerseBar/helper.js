import {
    getIsMiniWidth,
    getIsDesktopWidth
} from 'helpers/responsive'

import {
    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU_PHONE,
    LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU
} from 'constants/responsive'

const _getLyricSectionRect = ({
    deviceWidthIndex,
    windowHeight,
    isLyricExpanded,
    lyricHeightRatio,
    isTwoRowMenu
}) => {
    const bottom = windowHeight
    let top

    if (getIsDesktopWidth(deviceWidthIndex)) {
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
        top = windowHeight * (1 - lyricHeightRatio)

    } else if (isTwoRowMenu) {

        if (getIsMiniWidth(deviceWidthIndex)) {
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

export const getVerseBarStatus = ({
    deviceWidthIndex,
    windowHeight,
    isLyricExpanded,
    lyricHeightRatio,
    isHeightlessLyric,
    isTwoRowMenu,
    verseElement
}) => {

    if (!verseElement) {
        return null
    }

    // If lyric is collapsed and heightless, verse bars should never show.
    if (isHeightlessLyric && !isLyricExpanded) {
        return {
            isVerseBarAbove: false,
            isVerseBarBelow: false
        }
    }

    const lyricSectionRect = _getLyricSectionRect({
            deviceWidthIndex,
            windowHeight,
            isLyricExpanded,
            lyricHeightRatio,
            isTwoRowMenu
        }),

        selectedVerseRect = verseElement.getBoundingClientRect(),

        isVerseBarAbove = selectedVerseRect.top < lyricSectionRect.top,
        isVerseBarBelow = selectedVerseRect.bottom > lyricSectionRect.bottom

    return {
        isVerseBarAbove,
        isVerseBarBelow
    }
}
