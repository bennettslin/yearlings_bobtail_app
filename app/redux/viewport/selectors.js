export const IS_DESKTOP_WIDTH_SELECTOR =
    ({ viewportStore: { isDesktopWidth } }) => isDesktopWidth

// export const IS_TABLET_WIDTH_SELECTOR =
//     ({ viewportStore: { isTabletWidth } }) => isTabletWidth

export const IS_PHONE_OR_MINI_WIDTH_SELECTOR = ({
    viewportStore: { isDesktopWidth, isTabletWidth }
}) => (
    !isDesktopWidth && !isTabletWidth
)
