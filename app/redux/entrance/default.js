export const THEATRE_ENTRANCE_DEFAULTS = {
    canTheatreEnter: false,
    didTheatreEnter: false
}

export const ENTRANCE_DEFAULTS = {
    ...THEATRE_ENTRANCE_DEFAULTS,

    didSceneScrollExit: true,
    canSceneUpdate: false,
    didSceneUpdate: false,
    canSceneEnter: false,
    didSceneEnter: false
}
