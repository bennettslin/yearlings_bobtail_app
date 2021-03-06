export const getSongChangeDefaults = done => ({
    didCurtainsClose: done,
    didStageReset: done,
    isSongSelectComplete: done,
    isSongChangeDone: done,
    canTransitionAfterSongChange: done,
})

export const getSceneChangeDefaults = done => ({
    didSceneExit: done,
    isSceneScrollComplete: done,
    isSceneChangeDone: done,
    canTransitionAfterSceneChange: done,
})

export const ENTRANCE_DEFAULTS = {
    /**
     * The client side still needs to update the viewport store upon app load,
     * as it doesn't have access to the window object until then.
     */
    isWindowResizeDone: false,

    ...getSongChangeDefaults(true),
    ...getSceneChangeDefaults(true),

    /**
     * We set this to false in order to prevent trackers from animating right
     * after a verse change.
     */
    canTransitionAfterVerseChange: true,
}
