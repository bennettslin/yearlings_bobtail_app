import { LS_HEIGHT_MENU } from '../../constants/responsive'

const _getLyricSectionRect = ({
    isLyricExpandable,
    canSliderMount,
    isDesktopWidth,
    windowHeight,
    isLyricExpanded,
    lyricDynamicHeight,
    menuHeight
}) => {
    const bottom = windowHeight
    let top =
        isDesktopWidth ?
            LS_HEIGHT_MENU :
            menuHeight

    if (!isLyricExpandable && !canSliderMount) {
        /**
         * If lyric is not expandable and there is no slider, then the lyric
         * section is just the entire window height. Otherwise, the top is the
         * menu height to accommodate the slider.
         */
        top = 0

    } else if (isLyricExpandable && !isLyricExpanded) {
        /**
         * If lyric is expandable and it's collapsed, then use the stored
         * dynamic height. Otherwise, it's expanded and so the top is the menu
         * height.
         */
        top = windowHeight * (1 - lyricDynamicHeight)
    }

    return {
        top,
        bottom
    }
}

export const getVerseBarStatus = ({
    isLyricExpandable,
    canSliderMount,
    isDesktopWidth,
    windowHeight,
    isLyricExpanded,
    lyricDynamicHeight,
    isHeightlessLyric,
    menuHeight,
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
            isLyricExpandable,
            canSliderMount,
            isDesktopWidth,
            windowHeight,
            isLyricExpanded,
            lyricDynamicHeight,
            menuHeight
        }),

        selectedVerseRect = verseElement.getBoundingClientRect(),

        isVerseBarAbove = selectedVerseRect.top < lyricSectionRect.top,
        isVerseBarBelow = selectedVerseRect.bottom > lyricSectionRect.bottom

    return {
        isVerseBarAbove,
        isVerseBarBelow
    }
}
