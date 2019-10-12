import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD
} from 'constants/scene/actors'
import { FEIGNING_FEAR } from 'constants/scene/actors/instances/andrew'
import { TYING_TETHER } from 'constants/scene/actors/instances/bradBennett'
import { CHARMED_SCHOOLBUS } from 'constants/scene/actors/instances/bradSasha'
import { PANICKED } from 'constants/scene/actors/instances/preteenBennett'
import { INDIGNANT } from 'constants/scene/actors/instances/sasha'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PANICKED
                },
                [BRAD]: {
                    jewishBoy: {
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: CHARMED_SCHOOLBUS
                    }
                },
                [SASHA]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
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
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: TYING_TETHER
                },
                [BRAD]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FEIGNING_FEAR
                }
            }
        }
    }
]
