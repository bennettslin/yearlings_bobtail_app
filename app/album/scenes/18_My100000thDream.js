import {
    EL_TORITO_KEY,
    PAMPAS_KEY,
    OUTDOOR_WEDDING_KEY,
    CLIFF_KEY,
    CLIFF_DEATHBED_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING
} from 'scene/sky'

import {
    BENNETT,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY
} from 'scene/actorKeys'

import {
    DOCTOR
} from 'scene/instanceKeys/amy'

import {
    EL_TORITO,
    PAMPAS,
    GOPI,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'scene/instanceKeys/songs'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett runs into Sita, who happens to be walking out of an El Torito restaurant, having finished her shift.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, pleasantly confused',
                    instance: EL_TORITO
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, opening a door, pleasantly surprised',
                        instance: EL_TORITO
                    }
                }
            }
        },
        cubes: EL_TORITO_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `Bennett and Sita are dancing on the pampas with some gopis.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting cross-legged, playing recorder, content',
                    instance: PAMPAS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'resting on Bennett, content',
                        instance: PAMPAS
                    }
                },
                [CATHERINE]: {
                    gopi: {
                        todo: true,
                        workedHours: 3,
                        description: 'dancing',
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        todo: true,
                        workedHours: 3,
                        description: 'dancing',
                        instance: GOPI
                    }
                },
                [MIRIAM]: {
                    gopi: {
                        todo: true,
                        workedHours: 2.5,
                        description: 'dancing',
                        instance: GOPI
                    }
                }
            }
        },
        cubes: PAMPAS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 5,
        description: `In the background is an Indian wedding. Bennett is confused, because the bride appears to be Sita. But his Sita keeps dragging him forward, insistently.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back angle, confusedly being rushed',
                    instance: GETTING_DARK
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, urging',
                        instance: GETTING_DARK
                    }
                }
            }
        },
        cubes: OUTDOOR_WEDDING_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 7,
        description: `Sita and Bennett are at the edge of a cliff. Bennett is frightened. Sita is gesturing towards the edge.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, reacting to threat',
                    instance: CLIFF
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front angle, gesturing to grave',
                        instance: CLIFF
                    }
                }
            }
        },
        cubes: CLIFF_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 9,
        description: `The whole thing turns out to have been a dream. Bennett is in bed, old and dying. A doctor is pulling the sheet over him. A thought bubble shows the previous scene, with Bennett now accepting his fate, and Sita comforting him.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'calm, accepting of impending doom',
                    instance: FINAL_DREAM
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'comforting',
                        instance: FINAL_DREAM
                    }
                },
                [AMY]: {
                    doctor: {
                        todo: true,
                        workedHours: 3,
                        description: 'pulling sheet over Bennett',
                        instance: DOCTOR
                    }
                }
            }
        },
        cubes: CLIFF_DEATHBED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
