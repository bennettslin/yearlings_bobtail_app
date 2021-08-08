import { ACTOR } from '../../../../../../../src/constants/scene'
import {
    BENNETT,
    ANA,
    LIZ,
    MIRIAM,
    TRISTAN,
    NESTOR,
} from '../../../../../../../src/constants/scene/actors'
import {
    CHUCKLING,
    SMIRKING,
} from '../../../../../../../src/constants/scene/actors/ana'
import { DROPPING_MEATS } from '../../../../../../../src/constants/scene/actors/bennett'
import {
    BRUSH_OFF,
    CELIBATE_FREEZING,
} from '../../../../../../../src/constants/scene/actors/bennettLiz'
import { NOOGIE } from '../../../../../../../src/constants/scene/actors/miriamTristan'
import { INJURED } from '../../../../../../../src/constants/scene/actors/nestor'
import { PUNCHING } from '../../../../../../../src/constants/scene/actors/tristan'
import {
    GREETING,
    LEAVING_CRUMBLED,
} from '../../../../../../../src/constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: BRUSH_OFF,
                },
                [LIZ]: {
                    sita: {
                        instance: BRUSH_OFF,
                    },
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: DROPPING_MEATS,
                },
                [TRISTAN]: {
                    instance: PUNCHING,
                },
                [ANA]: {
                    instance: CHUCKLING,
                },
                [NESTOR]: {
                    instance: INJURED,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CELIBATE_FREEZING,
                },
                [LIZ]: {
                    sita: {
                        instance: CELIBATE_FREEZING,
                    },
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: GREETING,
                },
                [MIRIAM]: {
                    instance: NOOGIE,
                },
                [TRISTAN]: {
                    instance: NOOGIE,
                },
                [ANA]: {
                    instance: SMIRKING,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: LEAVING_CRUMBLED,
                },
                [LIZ]: {
                    sita: {
                        instance: LEAVING_CRUMBLED,
                    },
                },
            },
        },
    },
]
