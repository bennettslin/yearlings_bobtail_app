import { MINI_WIDTH_CONFIG } from '../../../constants/responsive'

export const getMenuMarginInOverlay = (windowWidth) => {
    const margin = (windowWidth - MINI_WIDTH_CONFIG.maxWidth) / 2

    // Don't return a negative margin.
    return margin < 0 ? 0 : margin
}
