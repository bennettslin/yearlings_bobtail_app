import { createSelector } from 'reselect'

export const WINDOW_WIDTH_SELECTOR = (
    { viewportStore: { windowWidth } }
) => windowWidth

export const WINDOW_HEIGHT_SELECTOR = (
    { viewportStore: { windowHeight } }
) => windowHeight

export const DEVICE_WIDTH_INDEX_SELECTOR = (
    { viewportStore: { deviceWidthIndex } }
) => deviceWidthIndex

export const IS_PHONE_WIDTH_SELECTOR = (
    { viewportStore: { isPhoneWidth } }
) => isPhoneWidth

export const IS_TABLET_WIDTH_SELECTOR = (
    { viewportStore: { isTabletWidth } }
) => isTabletWidth

export const IS_DESKTOP_WIDTH_SELECTOR = (
    { viewportStore: { isDesktopWidth } }
) => isDesktopWidth

export const IS_PHONE_OR_MINI_WIDTH_SELECTOR = createSelector(
    IS_TABLET_WIDTH_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR,
    (
        isTabletWidth,
        isDesktopWidth
    ) => (
        !isDesktopWidth && !isTabletWidth
    )
)

