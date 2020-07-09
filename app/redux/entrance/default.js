export const getSongChangeDefaults = done => ({
    didCurtainsClose: done,
    isSongSelectionComplete: done,
    isSongChangeDone: done
})

export const getSceneChangeDefaults = done => ({
    didSceneExit: done,
    isSceneScrollComplete: done,
    isSceneChangeDone: done
})

export const ENTRANCE_DEFAULTS = {
    /**
     * The client side still needs to update the viewport store upon app load,
     * as it doesn't have access to the window object until then.
     */
    isWindowResizeDone: false,
    ...getSongChangeDefaults(true),
    ...getSceneChangeDefaults(true)
}
