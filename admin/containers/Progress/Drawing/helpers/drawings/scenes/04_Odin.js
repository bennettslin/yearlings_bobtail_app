import { ACTOR } from '../../../../../../../app/constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA,
} from '../../../../../../../app/constants/scene/actors'
import {
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR,
} from '../../../../../../../app/constants/scene/actors/preteenBennett'
import { MERMAID } from '../../../../../../../app/constants/scene/actors/sashaBennett'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: MAT,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: STAIRS,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: GATE,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: RICKSHAW,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: SHORE,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: BUOY,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [SASHA]: {
                    mermaid: {
                        instance: MERMAID,
                    },
                },
                [PRETEEN_BENNETT]: {
                    instance: MERMAID,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: OCEAN_FLOOR,
                },
            },
        },
    },
]
