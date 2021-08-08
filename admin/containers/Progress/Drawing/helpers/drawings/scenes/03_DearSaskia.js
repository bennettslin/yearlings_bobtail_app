import { ACTOR } from '../../../../../../../src/constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD,
} from '../../../../../../../src/constants/scene/actors'
import { FEIGNING_FEAR } from '../../../../../../../src/constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../../../../../src/constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../../../../../../src/constants/scene/actors/bradSasha'
import { PANICKED } from '../../../../../../../src/constants/scene/actors/preteenBennett'
import { INDIGNANT } from '../../../../../../../src/constants/scene/actors/sasha'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: PANICKED,
                },
                [BRAD]: {
                    jewishBoy: {
                        instance: CHARMED_SCHOOLBUS,
                    },
                },
                [SASHA]: {
                    instance: CHARMED_SCHOOLBUS,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: TYING_TETHER,
                },
                [BRAD]: {
                    instance: TYING_TETHER,
                },
                [SASHA]: {
                    instance: INDIGNANT,
                },
                [ANDREW]: {
                    instance: FEIGNING_FEAR,
                },
            },
        },
    },
]
