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
                    headPlacement: true,
                    finalSvg: true,
                    instance: PANICKED
                },
                [BRAD]: {
                    jewishBoy: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: CHARMED_SCHOOLBUS
                    }
                },
                [SASHA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CHARMED_SCHOOLBUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: TYING_TETHER
                },
                [BRAD]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    instance: FEIGNING_FEAR
                }
            }
        }
    }
]
