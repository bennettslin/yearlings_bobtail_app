import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

import {
    EL_TORITO_KEY,
    PAMPAS_KEY,
    WEDDING_KEY,
    CLIFF_KEY,
    CLIFF_DEATHBED_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING
} from '../../scene/sky'

import {
    BENNETT,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY
} from '../../scene/actorKeys'

import {
    DOCTOR
} from '../../scene/instanceKeys/amy'

import {
    EL_TORITO,
    PAMPAS,
    GOPI,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from '../../scene/instanceKeys/songs'

import {
    PAMPAS_BACKDROP,
    WEDDING_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    INVERSE_THOUGHT_BACKDROP
} from '../../scene/backdropKeys'

import {
    WEDDING_CROWD,
    IV_DRIP,
    CLIFF_TREE
} from '../../scene/cutoutKeys'

import {
    HOSPITAL_RECORD_PLAYER
} from '../../scene/fixtureKeys'

import {
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR,
    PAMPAS_FAR,
    FOREBODING_TREES
} from '../../scene/flatKeys'

import {
    EL_TORITO_DOOR_LEFT,
    EL_TORITO_DOOR_RIGHT
} from '../../scene/doorKeys'

import {
    HOSPITAL_MATTRESS_LOWERED
} from '../../scene/furnitureKeys'

import {
    WEDDING_PLATFORM
} from '../../scene/panelKeys'

import {
    PUPPET_KHARI,
    PUPPET_LIZ
} from '../../scene/puppetKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett runs into Sita, who happens to be walking out of an El Torito restaurant, having finished her shift.`,
        presences: {
            [ACTORS]: {
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
            },
            [DOORS]: {
                [EL_TORITO_DOOR_LEFT]: true,
                [EL_TORITO_DOOR_RIGHT]: true
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
            [ACTORS]: {
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
            },
            [BACKDROPS]: {
                [PAMPAS_BACKDROP]: true
            },
            [FLATS]: {
                [PAMPAS_FAR]: true
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
            [ACTORS]: {
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
            },
            [CUTOUTS]: {
                [WEDDING_CROWD]: true
            },
            [BACKDROPS]: {
                [WEDDING_BACKDROP]: true
            },
            [FLATS]: {
                [FOREBODING_TREES]: true
            },
            [PANELS]: {
                [WEDDING_PLATFORM]: true
            },
            [PUPPETS]: {
                [PUPPET_KHARI]: true,
                [PUPPET_LIZ]: true
            }
        },
        cubes: WEDDING_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 7,
        description: `Sita and Bennett are at the edge of a cliff. Bennett is frightened. Sita is gesturing towards the edge.`,
        presences: {
            [ACTORS]: {
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
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUTS]: {
                [CLIFF_TREE]: true
            },
            [FLATS]: {
                [CLIFF_GRAVES_FAR]: true,
                [CLIFF_GRAVES_NEAR]: true
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
            [ACTORS]: {
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
            },
            [CUTOUTS]: {
                [IV_DRIP]: true
            },
            [FIXTURES]: {
                [HOSPITAL_RECORD_PLAYER]: true
            },
            [BACKDROPS]: {
                [INVERSE_THOUGHT_BACKDROP]: true
            },
            [FURNITURES]: {
                [HOSPITAL_MATTRESS_LOWERED]: true
            }
        },
        cubes: CLIFF_DEATHBED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
