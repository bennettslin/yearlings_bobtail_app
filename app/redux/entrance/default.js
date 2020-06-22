export const getSongChangeDefaults = done => ({
    didCurtainsClose: done,
    isSongSelectionComplete: done,
    isSongChangeDone: done
})

export const getSceneChangeDefaults = done => ({
    didSceneExit: done,
    isSceneChangeDone: done
})

export const ENTRANCE_DEFAULTS = {
    isWindowResizeDone: true,
    ...getSongChangeDefaults(true),
    ...getSceneChangeDefaults(true)
}
