import {
    ACTOR,
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET
} from '../../constants/scene'
import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY
} from '../../constants/scene/scenes'
import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_THOUGHT
} from '../../scene/sky/keys'
import {
    BENNETT,
    MIRIAM,
    MIRIAM_BENNETT
} from '../../constants/scene/actors'
import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM
} from '../../constants/scene/actors/instances/bennett'
import {
    PERFUMING,
    TENNIS,
    REVERSING
} from '../../constants/scene/actors/instances/miriam'
import {
    COWGIRL,
    BLOWJOB
} from '../../constants/scene/actors/instances/miriamBennett'
import { GOLDEN_GATE_BACKDROP } from '../../constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_LARGE__DEATHBED,
    THOUGHT_MEDIUM,
    BUBBLE_SMALL__TENNIS,
    BUBBLE_MEDIUM__TENNIS,
    BUBBLE_LARGE__TENNIS,
    THOUGHT_SMALL
} from '../../constants/scene/things/bubbles'
import {
    EL_CERRITO_TREE,
    IV_DRIP
} from '../../constants/scene/things/cutouts'
import { HOSPITAL_RECORD_PLAYER } from '../../constants/scene/things/fixtures'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR,
    TENNIS_COURT
} from '../../constants/scene/things/flats'
import {
    REATTA_INTERIOR,
    REATTA_SEAT,
    REATTA_SEAT_DOWN,
    REATTA_EXTERIOR,
    HOSPITAL_BED
} from '../../constants/scene/things/panels'
import { PUPPET_REATTA } from '../../constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett and Miriam are sitting in her car.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting in car, taking off pants',
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    description: 'sitting in car, putting on perfume',
                    instance: PERFUMING
                }
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUT]: {
                [EL_CERRITO_TREE]: true
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT]: true,
                [REATTA_EXTERIOR]: true
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
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'back angle, eyes closed, trying to get off',
                    instance: COWGIRL
                }
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUT]: {
                [EL_CERRITO_TREE]: true
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT_DOWN]: true,
                [REATTA_EXTERIOR]: true
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
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'back angle, giving blowjob',
                    instance: BLOWJOB
                }
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUT]: {
                [EL_CERRITO_TREE]: true
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT_DOWN]: true,
                [REATTA_EXTERIOR]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front angle, dying, infirm',
                    instance: INFIRM
                }
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__DEATHBED]: true,
                [BUBBLE_MEDIUM__DEATHBED]: true,
                [BUBBLE_LARGE__DEATHBED]: true,
                [THOUGHT_MEDIUM]: true
            },
            [CUTOUT]: {
                [IV_DRIP]: true
            },
            [FIXTURE]: {
                [HOSPITAL_RECORD_PLAYER]: true
            },
            [PANEL]: {
                [HOSPITAL_BED]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front angle, dying, infirm',
                    instance: INFIRM
                },
                [MIRIAM]: {
                    description: 'serving in tennis',
                    instance: TENNIS
                }
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__DEATHBED]: true,
                [BUBBLE_MEDIUM__DEATHBED]: true,
                [BUBBLE_LARGE__DEATHBED]: true,
                [THOUGHT_MEDIUM]: true,
                [BUBBLE_SMALL__TENNIS]: true,
                [BUBBLE_MEDIUM__TENNIS]: true,
                [BUBBLE_LARGE__TENNIS]: true,
                [THOUGHT_SMALL]: true
            },
            [CUTOUT]: {
                [IV_DRIP]: true
            },
            [FIXTURE]: {
                [HOSPITAL_RECORD_PLAYER]: true
            },
            [FLAT]: {
                [TENNIS_COURT]: true
            },
            [PANEL]: {
                [HOSPITAL_BED]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'pensive, laying condom on ground',
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    description: 'side, looking back, reversing car',
                    instance: REVERSING
                }
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUT]: {
                [EL_CERRITO_TREE]: true
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT]: true,
                [REATTA_EXTERIOR]: true
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
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUT]: {
                [EL_CERRITO_TREE]: true
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true
            },
            [PUPPET]: {
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
