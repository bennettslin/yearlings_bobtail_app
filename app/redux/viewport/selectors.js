import { createSelector } from 'reselect'

export const mapWindowWidth = (
    { viewportStore: { windowWidth } }
) => windowWidth

export const mapWindowHeight = (
    { viewportStore: { windowHeight } }
) => windowHeight

export const mapDeviceWidthIndex = (
    { viewportStore: { deviceWidthIndex } }
) => deviceWidthIndex

export const mapIsHeightlessLyric = (
    { viewportStore: { isHeightlessLyric } }
) => isHeightlessLyric

export const mapIsTwoRowMenu = (
    { viewportStore: { isTwoRowMenu } }
) => isTwoRowMenu

export const mapMenuHeight = (
    { viewportStore: { menuHeight } }
) => menuHeight

export const mapIsPhoneWidth = (
    { viewportStore: { isPhoneWidth } }
) => isPhoneWidth

export const mapIsTabletWidth = (
    { viewportStore: { isTabletWidth } }
) => isTabletWidth

export const mapIsDesktopWidth = (
    { viewportStore: { isDesktopWidth } }
) => isDesktopWidth

export const mapIsPhoneOrMiniWidth = createSelector(
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        isTabletWidth,
        isDesktopWidth
    ) => (
        !isDesktopWidth && !isTabletWidth
    )
)

