import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD
} from 'constants/scene/actors'
import { FEIGNING_FEAR } from 'constants/scene/actors/andrew'
import { TYING_TETHER } from 'constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from 'constants/scene/actors/bradSasha'
import { PANICKED } from 'constants/scene/actors/preteenBennett'
import { INDIGNANT } from 'constants/scene/actors/sasha'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: PANICKED
                },
                [BRAD]: {
                    jewishBoy: {
                        composite: true,
                        instance: CHARMED_SCHOOLBUS
                    }
                },
                [SASHA]: {
                    composite: true,
                    instance: CHARMED_SCHOOLBUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: TYING_TETHER
                },
                [BRAD]: {
                    composite: true,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    composite: true,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    composite: true,
                    instance: FEIGNING_FEAR
                }
            }
        }
    }
]
