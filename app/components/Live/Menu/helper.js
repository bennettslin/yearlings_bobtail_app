import { LS_WIDTH_MENU_OVERLAY } from '../../../constants/responsive'

export const getMenuMarginInOverlay = ({
    isDesktopWidth,
    windowWidth
}) => {

    // Don't bother if we're not in desktop.
    if (!isDesktopWidth) {
        return 0
    }

    const margin = (windowWidth - LS_WIDTH_MENU_OVERLAY) / 2

    // Don't return a negative margin.
    return margin < 0 ? 0 : margin
}
