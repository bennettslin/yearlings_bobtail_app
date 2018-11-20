import { MINI_OBJECT } from '../../../constants/responsive'

const getMenuMarginInOverlay = (windowWidth) => {
    const margin = (windowWidth - MINI_OBJECT.maxWidth) / 2

    // Don't return a negative margin.
    return margin < 0 ? 0 : margin
}

export {
    getMenuMarginInOverlay
}
