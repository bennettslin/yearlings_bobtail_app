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
                    hands: true,
                    eyes: true,
                    composite: true,
                    instance: PANICKED
                },
                [BRAD]: {
                    jewishBoy: {
                        hands: true,
                        eyes: true,
                        composite: true,
                        instance: CHARMED_SCHOOLBUS
                    }
                },
                [SASHA]: {
                    hands: true,
                    eyes: true,
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
                    hands: true,
                    eyes: true,
                    composite: true,
                    instance: TYING_TETHER
                },
                [BRAD]: {
                    hands: true,
                    eyes: true,
                    composite: true,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    hands: true,
                    eyes: true,
                    composite: true,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    hands: true,
                    eyes: true,
                    composite: true,
                    instance: FEIGNING_FEAR
                }
            }
        }
    }
]
