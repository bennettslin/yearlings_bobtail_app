import { ACTOR } from '../../../../../../../app/constants/scene'
import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE,
} from '../../../../../../../app/constants/scene/actors'
import { SMOKER } from '../../../../../../../app/constants/scene/actors/amy'
import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS,
} from '../../../../../../../app/constants/scene/actors/bennett'
import {
    WEEPING,
    QUIPPING,
    PUZZLED,
} from '../../../../../../../app/constants/scene/actors/catherine'
import { CATHOLIC_GUY } from '../../../../../../../app/constants/scene/actors/wade'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: BREAKUP_DEJECTED,
                },
                [CATHERINE]: {
                    instance: WEEPING,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: SOLICITING_OPINION,
                },
                [CATHERINE]: {
                    instance: QUIPPING,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CATHOLIC_PENSIVE,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CATHOLIC_IDEA,
                },
                [WADE]: {
                    catholic: {
                        instance: CATHOLIC_GUY,
                    },
                },
                [AMY]: {
                    smoker: {
                        instance: SMOKER,
                    },
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: PIOUS,
                },
                [CATHERINE]: {
                    instance: PUZZLED,
                },
            },
        },
    },
]
