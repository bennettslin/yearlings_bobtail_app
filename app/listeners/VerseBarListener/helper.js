import {
    getIsMini,
    getIsDesktop
} from 'helpers/responsive'

import {
    LS_HEIGHT_LYRIC_COLLAPSED,

    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU_PHONE,
    LS_TOP_OFFSET_TRUNCATED_TWO_ROW_MENU
} from 'constants/responsive'

const _getLyricSectionRect = ({

    deviceIndex,
    windowHeight,
    isLyricExpanded,
    isTwoRowMenu

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

    } else if (isTwoRowMenu) {

        if (getIsMini(deviceIndex)) {
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
    deviceIndex,
    windowHeight,
    isLyricExpanded,
    isHiddenLyric,
    isTwoRowMenu,
    verseElement
}) => {

    if (!verseElement) {
        return null
    }

    // If lyric is collapsed and heightless, verse bars should never show.
    if (isHiddenLyric && !isLyricExpanded) {
        return {
            isVerseBarAbove: false,
            isVerseBarBelow: false
        }
    }

    const lyricSectionRect = _getLyricSectionRect({
            deviceIndex,
            windowHeight,
            isLyricExpanded,
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
