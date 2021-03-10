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
    isWindowResizeDone: true,

    ...getSongChangeDefaults(true),
    ...getSceneChangeDefaults(true),

    /**
     * We set this to false in order to prevent trackers from animating right
     * after a verse change.
     */
    canTransitionAfterVerseChange: true,
}
