import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    BENNETT,
    MIRIAM
} from 'scene/actorKeys'

import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM
} from 'scene/instanceKeys/bennett'

import {
    PERFUMING,
    TENNIS,
    REVERSING
} from 'scene/instanceKeys/miriam'

import {
    COWGIRL,
    BLOWJOB
} from 'scene/instanceKeys/songs'

import {
    GOLDEN_GATE_BACKDROP
} from 'scene/backdropKeys'

import {
    IV_DRIP
} from 'scene/cutoutKeys'

import {
    HOSPITAL_RECORD_PLAYER
} from 'scene/fixtureKeys'

import {
    EL_CERRITO_TREE,
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from 'scene/flatKeys'

import {
    REATTA_SEAT,
    REATTA_SEAT_LOWERED,
    REATTA_DASHBOARD,
    HOSPITAL_MATTRESS
} from 'scene/furnitureKeys'

import {
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL
} from 'scene/panelKeys'

import {
    PUPPET_REATTA
} from 'scene/puppetKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett and Miriam are sitting in her car.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting in car, taking off pants',
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'sitting in car, putting on perfume',
                    instance: PERFUMING
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [FLATS]: {
                [EL_CERRITO_TREE]: true,
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [FURNITURES]: {
                [REATTA_SEAT]: true,
                [REATTA_DASHBOARD]: true
            },
            [PANELS]: {
                [REATTA_EXTERIOR]: true,
                [REATTA_INTERIOR]: true
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 3,
        description: `Bennett and Miriam are having sex in a car overlooking a cliff. Miriam is on top.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, impotent, apologetic',
                    instance: COWGIRL
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back angle, eyes closed, trying to get off',
                    instance: COWGIRL
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [FLATS]: {
                [EL_CERRITO_TREE]: true,
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [FURNITURES]: {
                [REATTA_SEAT]: true,
                [REATTA_DASHBOARD]: true
            },
            [PANELS]: {
                [REATTA_EXTERIOR]: true,
                [REATTA_INTERIOR]: true
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 5,
        description: `Miriam is now giving Bennett a blowjob. Meanwhile, they are both thinking a thought bubble in which they are now married. Their child is a pinhead.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, trying to get off',
                    instance: BLOWJOB
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back angle, giving blowjob',
                    instance: BLOWJOB
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [FLATS]: {
                [EL_CERRITO_TREE]: true,
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [FURNITURES]: {
                [REATTA_SEAT_LOWERED]: true,
                [REATTA_DASHBOARD]: true
            },
            [PANELS]: {
                [REATTA_EXTERIOR]: true,
                [REATTA_INTERIOR]: true
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `In a thought bubble, Bennett is dying in a hospital bed next to a record player. In another thought bubble, Miriam is playing tennis.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, dying, infirm',
                    instance: INFIRM
                }
            },
            [CUTOUTS]: {
                [IV_DRIP]: true
            },
            [FIXTURES]: {
                [HOSPITAL_RECORD_PLAYER]: true
            },
            [FURNITURES]: {
                [HOSPITAL_MATTRESS]: true
            },
            [PANELS]: {
                [DEATHBED_THOUGHT_PANEL]: true
            }
        },
        cubes: EL_CERRITO_DEATHBED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `In the same scene, Miriam now appears in Bennett's thought bubble. She is playing tennis.`,
        presences: {
            [ACTORS]: {
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'serving in tennis',
                    instance: TENNIS
                }
            },
            [CUTOUTS]: {
                [IV_DRIP]: true
            },
            [FIXTURES]: {
                [HOSPITAL_RECORD_PLAYER]: true
            },
            [FURNITURES]: {
                [HOSPITAL_MATTRESS]: true
            },
            [PANELS]: {
                [DEATHBED_THOUGHT_PANEL]: true,
                [TENNIS_THOUGHT_PANEL]: true
            }
        },
        cubes: EL_CERRITO_TENNIS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 9,
        description: `They drive away. Bennett, with his seat back, hesitantly drops the used condom on the ground, looking at it wistfully. Miriam is looking away, backing up the car.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'pensive, laying condom on ground',
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, looking back, reversing car',
                    instance: REVERSING
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [FLATS]: {
                [EL_CERRITO_TREE]: true,
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [FURNITURES]: {
                [REATTA_SEAT]: true,
                [REATTA_DASHBOARD]: true
            },
            [PANELS]: {
                [REATTA_EXTERIOR]: true,
                [REATTA_INTERIOR]: true
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `The car is in the background.`,
        presences: {
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [FLATS]: {
                [EL_CERRITO_TREE]: true,
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [PUPPETS]: {
                [PUPPET_REATTA]: true
            }
        },
        cubes: EL_CERRITO_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
