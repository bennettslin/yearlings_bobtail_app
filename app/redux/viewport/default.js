export const VIEWPORT_DEFAULTS = {
    /**
     * Server side does not have access to the window object when rendering. So
     * we'll begin with placeholder values, then update with real values based
     * on the window object once rendering on the client side.
     */
    windowWidth: 0,
    windowHeight: 0,
    deviceWidthIndex: 0,
    isHeightlessLyric: false,
    isTwoRowMenu: false,
    menuHeight: 0,
    canCarouselNavMount: true,
    stageDimensionCoordinates: JSON.stringify({
        stageTop: 0,
        stageLeft: 0,
        stageWidth: 0,
        stageHeight: 0,
    }),
    prosceniumDimensionCoordinates: JSON.stringify({
        prosceniumTop: 0,
        prosceniumLeft: 0,
        prosceniumWidth: 0,
        prosceniumHeight: 0,
    }),
    ceilingHeight: 0,
    floorHeight: 0,
}

export const VIEWPORT_PITCH_PAGE_DEFAULTS = {
    deviceWidthIndex: 0,
}
