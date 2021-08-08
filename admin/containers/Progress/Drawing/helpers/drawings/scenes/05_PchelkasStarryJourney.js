import { ACTOR } from '../../../../../../../src/constants/scene'
import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    TRISTAN,
} from '../../../../../../../src/constants/scene/actors'
import {
    THROWING,
    NOODLING,
} from '../../../../../../../src/constants/scene/actors/andrew'
import {
    GESTURING,
    SNACKING,
} from '../../../../../../../src/constants/scene/actors/brad'
import { STARING } from '../../../../../../../src/constants/scene/actors/christopher'
import { BLISSFUL_GUILTY } from '../../../../../../../src/constants/scene/actors/christopherBennett'
import { ARGUING } from '../../../../../../../src/constants/scene/actors/mother'
import {
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH,
} from '../../../../../../../src/constants/scene/actors/preteenBennett'
import { POPULAR_GIRL } from '../../../../../../../src/constants/scene/actors/sasha'
import { ASLEEP } from '../../../../../../../src/constants/scene/actors/songs'
import { PRINCIPAL } from '../../../../../../../src/constants/scene/actors/tristan'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: BLISSFUL_GUILTY,
                },
                [CHRISTOPHER]: {
                    instance: BLISSFUL_GUILTY,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: FEIGNING_SICK,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: ASLEEP,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: SHAKEN,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: STOIC,
                },
                [BRAD]: {
                    instance: GESTURING,
                },
                [ANDREW]: {
                    instance: THROWING,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: WISTFUL,
                },
                [BRAD]: {
                    instance: SNACKING,
                },
                [ANDREW]: {
                    instance: NOODLING,
                },
                [SASHA]: {
                    popularGirl: {
                        instance: POPULAR_GIRL,
                    },
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: SHEEPISH,
                },
                [CHRISTOPHER]: {
                    instance: STARING,
                },
                [MOTHER]: {
                    instance: ARGUING,
                },
                [TRISTAN]: {
                    principal: {
                        instance: PRINCIPAL,
                    },
                },
            },
        },
    },
]
