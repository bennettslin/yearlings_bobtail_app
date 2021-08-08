import { ACTOR } from '../../../../../../../src/constants/scene'
import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER,
} from '../../../../../../../src/constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING,
} from '../../../../../../../src/constants/scene/actors/youngBennett'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING,
} from '../../../../../../../src/constants/scene/actors/anita'
import {
    CURIOUS,
    SNICKERING,
} from '../../../../../../../src/constants/scene/actors/esther'

export default [
    {
        presences: {
            [ACTOR]: {
                [ESTHER]: {
                    instance: CURIOUS,
                },
                [ANITA]: {
                    instance: EXASPERATED,
                },
                [YOUNG_BENNETT]: {
                    instance: PANICKED,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    instance: CONCERNED,
                },
                [ESTHER]: {
                    instance: SNICKERING,
                },
                [YOUNG_BENNETT]: {
                    instance: FLUSTERED,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [YOUNG_BENNETT]: {
                    instance: BATHING,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    instance: CHEERING,
                },
                [YOUNG_BENNETT]: {
                    instance: SINGING,
                },
            },
        },
    },
]
