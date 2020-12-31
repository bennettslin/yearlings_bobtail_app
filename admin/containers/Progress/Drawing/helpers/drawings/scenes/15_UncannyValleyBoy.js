import { ACTOR } from '../../../../../../../app/constants/scene'
import {
    BENNETT,
    ESTHER,
    MOTHER,
    FATHER,
    SASHA,
    PRETEEN_BENNETT,
    KHARI,
    LIZ,
    MIRIAM,
    STEPHANIE,
} from '../../../../../../../app/constants/scene/actors'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING,
} from '../../../../../../../app/constants/scene/actors/estherMother'
import {
    ACCUSATORY,
    REELING,
} from '../../../../../../../app/constants/scene/actors/father'
import { JOKING_LAUGHING } from '../../../../../../../app/constants/scene/actors/khariLiz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
} from '../../../../../../../app/constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from '../../../../../../../app/constants/scene/actors/miriamStephanie'
import { COMFORTING_HUMILIATED } from '../../../../../../../app/constants/scene/actors/sashaBennett'
import { BENNETT_RECORDING } from '../../../../../../../app/constants/scene/actors/stephanie'
import {
    PAST,
    PRESENT,
    FUTURE,
} from '../../../../../../../app/constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    instance: ASLEEP_FEARFUL,
                },
                [BENNETT]: {
                    instance: ASLEEP_FEARFUL,
                },
                [FATHER]: {
                    instance: ACCUSATORY,
                },
                [ESTHER]: {
                    youngSita: {
                        instance: HURT_CONSOLING,
                    },
                },
                [MOTHER]: {
                    instance: HURT_CONSOLING,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: PAST,
                },
                [FATHER]: {
                    instance: PAST,
                },
                [SASHA]: {
                    instance: COMFORTING_HUMILIATED,
                },
                [PRETEEN_BENNETT]: {
                    instance: COMFORTING_HUMILIATED,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: PRESENT,
                },
                [FATHER]: {
                    instance: PRESENT,
                },
                [MOTHER]: {
                    instance: PRESENT,
                },
                [MIRIAM]: {
                    instance: MISCHIEVOUS_BANJO,
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        instance: MISCHIEVOUS_BANJO,
                    },
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: FUTURE,
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        instance: BENNETT_RECORDING,
                    },
                },
                [MOTHER]: {
                    instance: FUTURE,
                },
                [FATHER]: {
                    instance: FUTURE,
                },
                [KHARI]: {
                    instance: JOKING_LAUGHING,
                },
                [LIZ]: {
                    sita: {
                        instance: JOKING_LAUGHING,
                    },
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    instance: FENDING_OFF,
                },
                [BENNETT]: {
                    instance: FENDING_OFF,
                },
                [FATHER]: {
                    instance: REELING,
                },
                [ESTHER]: {
                    youngSita: {
                        instance: SOBBING_SHIELDING,
                    },
                },
                [MOTHER]: {
                    instance: SOBBING_SHIELDING,
                },
            },
        },
    },
]
