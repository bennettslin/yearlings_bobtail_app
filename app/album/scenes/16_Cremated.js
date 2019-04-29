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
} from '../../scene/keys/cubes'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_THOUGHT
} from '../../scene/sky'

import {
    BENNETT,
    MIRIAM,
    MIRIAM_BENNETT
} from '../../scene/actorKeys'

import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM
} from '../../scene/instanceKeys/bennett'

import {
    PERFUMING,
    TENNIS,
    REVERSING
} from '../../scene/instanceKeys/miriam'

import {
    COWGIRL,
    BLOWJOB
} from '../../scene/instanceKeys/miriamBennett'

import {
    GOLDEN_GATE_BACKDROP
} from '../../scene/backdropKeys'

import {
    EL_CERRITO_TREE,
    IV_DRIP
} from '../../scene/cutoutKeys'

import {
    HOSPITAL_RECORD_PLAYER
} from '../../scene/fixtureKeys'

import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from '../../scene/flatKeys'

import {
    HOSPITAL_PILLOW
} from '../../scene/furnitureKeys'

import {
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL
} from '../../scene/panelKeys'

import {
    PUPPET_REATTA
} from '../../scene/puppetKeys'

export default [
    {
        unitIndex: 1,
        description: `Bennett and Miriam are sitting in her car.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'sitting in car, taking off pants',
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    description: 'sitting in car, putting on perfume',
                    instance: PERFUMING
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUTS]: {
                [EL_CERRITO_TREE]: true
            },
            [FLATS]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
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
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.25,
                    compound: 2,
                    description: 'back angle, eyes closed, trying to get off',
                    instance: COWGIRL
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUTS]: {
                [EL_CERRITO_TREE]: true
            },
            [FLATS]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
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
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.25,
                    compound: 2,
                    description: 'back angle, giving blowjob',
                    instance: BLOWJOB
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUTS]: {
                [EL_CERRITO_TREE]: true
            },
            [FLATS]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
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
                    workedHours: 3.75,
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
                [HOSPITAL_PILLOW]: true
            },
            [PANELS]: {
                [DEATHBED_THOUGHT_PANEL]: true
            }
        },
        cubes: EL_CERRITO_DEATHBED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_THOUGHT
        }
    },
    {
        unitIndex: 8,
        description: `In the same scene, Miriam now appears in Bennett's thought bubble. She is playing tennis.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    duplicate: true,
                    description: 'front angle, dying, infirm',
                    instance: INFIRM
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
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
                [HOSPITAL_PILLOW]: true
            },
            [PANELS]: {
                [DEATHBED_THOUGHT_PANEL]: true,
                [TENNIS_THOUGHT_PANEL]: true
            }
        },
        cubes: EL_CERRITO_TENNIS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_THOUGHT
        }
    },
    {
        unitIndex: 9,
        description: `They drive away. Bennett, with his seat back, hesitantly drops the used condom on the ground, looking at it wistfully. Miriam is looking away, backing up the car.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'pensive, laying condom on ground',
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    description: 'side, looking back, reversing car',
                    instance: REVERSING
                }
            },
            [BACKDROPS]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUTS]: {
                [EL_CERRITO_TREE]: true
            },
            [FLATS]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
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
            [CUTOUTS]: {
                [EL_CERRITO_TREE]: true
            },
            [FLATS]: {
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
