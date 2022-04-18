import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET,
} from '../../../../src/constants/scene/things'
import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_AUTUMN,
    SEASON_THOUGHT,
    TIME_AFTERNOON,
    TIME_EVENING,
} from '../../../../src/constants/scene/sky'
import {
    BENNETT,
    MIRIAM,
    MIRIAM_BENNETT,
} from '../../../../src/constants/scene/actors'
import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM,
} from '../../../../src/constants/scene/actors/bennett'
import {
    PERFUMING,
    TENNIS,
    REVERSING,
} from '../../../../src/constants/scene/actors/miriam'
import {
    COWGIRL,
    BLOWJOB,
} from '../../../../src/constants/scene/actors/miriamBennett'
import {
    GOLDEN_GATE_BACKDROP,
    THOUGHT_MEDIUM__DEATHBED,
    THOUGHT_SMALL,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_LARGE__DEATHBED,
    BUBBLE_SMALL__TENNIS,
    BUBBLE_MEDIUM__TENNIS,
    BUBBLE_LARGE__TENNIS,
} from '../../../../src/constants/scene/things/bubbles'
import {
    IV_DRIP,
    TREE__EL_CERRITO,
} from '../../../../src/constants/scene/things/cutouts'
import {
    CONDOM_MIRIAM,
    CONDOM_WRAPPER_MIRIAM,
    FREEWAY_SIGN,
    HAWAIIAN_DOLL,
    HOSPITAL_RECORD_PLAYER,
    TENNIS_BALL,
} from '../../../../src/constants/scene/things/fixtures'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR,
    TENNIS_COURT,
} from '../../../../src/constants/scene/things/flats'
import { DEATHBED_PILLOW } from '../../../../src/constants/scene/things/furnitures'
import {
    REATTA_INTERIOR,
    REATTA_SEAT_BOTTOM,
    REATTA_SEAT_BACK,
    REATTA_SEAT_BACK_DOWN,
    REATTA_EXTERIOR_FRONT,
    REATTA_EXTERIOR_REAR,
    HOSPITAL_BED,
    HOSPITAL_RECORD_STAND,
} from '../../../../src/constants/scene/things/panels'
import { PUPPET_REATTA } from '../../../../src/constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett and Miriam are sitting in her car.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting in car, taking off pants',
                    instance: REMOVING_PANTS,
                },
                [MIRIAM]: {
                    description: 'sitting in car, putting on perfume',
                    instance: PERFUMING,
                },
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
            },
            [CUTOUT]: {
                [TREE__EL_CERRITO]: true,
            },
            [FIXTURE]: {
                [FREEWAY_SIGN]: true,
                [HAWAIIAN_DOLL]: true,
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true,
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT_BOTTOM]: true,
                [REATTA_SEAT_BACK]: true,
                [REATTA_EXTERIOR_FRONT]: true,
                [REATTA_EXTERIOR_REAR]: true,
            },
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 3,
        description: `Bennett and Miriam are having sex in a car overlooking a cliff. Miriam is on top.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'back angle, eyes closed, trying to get off',
                    instance: COWGIRL,
                },
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
            },
            [CUTOUT]: {
                [TREE__EL_CERRITO]: true,
            },
            [FIXTURE]: {
                [CONDOM_WRAPPER_MIRIAM]: true,
                [FREEWAY_SIGN]: true,
                [HAWAIIAN_DOLL]: true,
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true,
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT_BOTTOM]: true,
                [REATTA_SEAT_BACK_DOWN]: true,
                [REATTA_EXTERIOR_FRONT]: true,
                [REATTA_EXTERIOR_REAR]: true,
            },
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 5,
        description: `Miriam is now giving Bennett a blowjob. Meanwhile, they are both thinking a thought bubble in which they are now married. Their child is a pinhead.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'back angle, giving blowjob',
                    instance: BLOWJOB,
                },
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
            },
            [CUTOUT]: {
                [TREE__EL_CERRITO]: true,
            },
            [FIXTURE]: {
                [CONDOM_WRAPPER_MIRIAM]: true,
                [FREEWAY_SIGN]: true,
                [HAWAIIAN_DOLL]: true,
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true,
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT_BOTTOM]: true,
                [REATTA_SEAT_BACK_DOWN]: true,
                [REATTA_EXTERIOR_FRONT]: true,
                [REATTA_EXTERIOR_REAR]: true,
            },
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 7,
        description: `In a thought bubble, Bennett is dying in a hospital bed next to a record player. In another thought bubble, Miriam is playing tennis.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front angle, dying, infirm',
                    instance: INFIRM,
                },
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__DEATHBED]: true,
                [BUBBLE_MEDIUM__DEATHBED]: true,
                [BUBBLE_LARGE__DEATHBED]: true,
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
                [THOUGHT_MEDIUM__DEATHBED]: true,
            },
            [CUTOUT]: {
                [IV_DRIP]: true,
            },
            [FIXTURE]: {
                [HOSPITAL_RECORD_PLAYER]: true,
                [FREEWAY_SIGN]: true,
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true,
            },
            [FURNITURE]: {
                [DEATHBED_PILLOW]: true,
            },
            [PANEL]: {
                [HOSPITAL_BED]: true,
                [HOSPITAL_RECORD_STAND]: true,
            },
        },
        cubes: EL_CERRITO_DEATHBED_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 8,
        description: `In the same scene, Miriam now appears in Bennett's thought bubble. She is playing tennis.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front angle, dying, infirm',
                    instance: INFIRM,
                },
                [MIRIAM]: {
                    description: 'serving in tennis',
                    instance: TENNIS,
                },
            },
            [BACKDROP]: {
                [THOUGHT_MEDIUM__DEATHBED]: true,
                [THOUGHT_SMALL]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__DEATHBED]: true,
                [BUBBLE_MEDIUM__DEATHBED]: true,
                [BUBBLE_LARGE__DEATHBED]: true,
                [BUBBLE_SMALL__TENNIS]: true,
                [BUBBLE_MEDIUM__TENNIS]: true,
                [BUBBLE_LARGE__TENNIS]: true,
            },
            [CUTOUT]: {
                [IV_DRIP]: true,
            },
            [FIXTURE]: {
                [HOSPITAL_RECORD_PLAYER]: true,
                [TENNIS_BALL]: true,
            },
            [FLAT]: {
                [TENNIS_COURT]: true,
            },
            [FURNITURE]: {
                [DEATHBED_PILLOW]: true,
            },
            [PANEL]: {
                [HOSPITAL_BED]: true,
                [HOSPITAL_RECORD_STAND]: true,
            },
        },
        cubes: EL_CERRITO_TENNIS_KEY,
        sky: { season: SEASON_THOUGHT },
    },
    {
        unitIndex: 9,
        description: `They drive away. Bennett, with his seat back, hesitantly drops the used condom on the ground, looking at it wistfully. Miriam is looking away, backing up the car.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'pensive, laying condom on ground',
                    instance: DISPOSING_CONDOM,
                },
                [MIRIAM]: {
                    description: 'side, looking back, reversing car',
                    instance: REVERSING,
                },
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
            },
            [CUTOUT]: {
                [TREE__EL_CERRITO]: true,
            },
            [FIXTURE]: {
                [CONDOM_WRAPPER_MIRIAM]: true,
                [FREEWAY_SIGN]: true,
                [HAWAIIAN_DOLL]: true,
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true,
            },
            [PANEL]: {
                [REATTA_INTERIOR]: true,
                [REATTA_SEAT_BOTTOM]: true,
                [REATTA_SEAT_BACK]: true,
                [REATTA_EXTERIOR_FRONT]: true,
                [REATTA_EXTERIOR_REAR]: true,
            },
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 11,
        description: `The car is in the background.`,
        presences: {
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
            },
            [CUTOUT]: {
                [TREE__EL_CERRITO]: true,
            },
            [FIXTURE]: {
                [FREEWAY_SIGN]: true,
                [CONDOM_MIRIAM]: true,
                [CONDOM_WRAPPER_MIRIAM]: true,
            },
            [FLAT]: {
                [EL_CERRITO_FAR]: true,
                [EL_CERRITO_NEAR]: true,
            },
            [PUPPET]: {
                [PUPPET_REATTA]: true,
            },
        },
        cubes: EL_CERRITO_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN },
    },
]
