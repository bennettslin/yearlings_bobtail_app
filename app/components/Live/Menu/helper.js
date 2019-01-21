import { LS_WIDTH_MENU_BREAKPOINT } from '../../../constants/responsive/deviceWidth'

export const getMenuMarginInOverlay = ({
    isDesktopWidth,
    windowWidth
}) => {

    // Don't bother if we're not in desktop.
    if (!isDesktopWidth) {
        return 0
    }

    const margin = (windowWidth - LS_WIDTH_MENU_BREAKPOINT) / 2

    // Don't return a negative margin.
    return margin < 0 ? 0 : margin
}
