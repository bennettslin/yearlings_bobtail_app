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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PANICKED
                },
                [BRAD]: {
                    jewishBoy: {
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: CHARMED_SCHOOLBUS
                    }
                },
                [SASHA]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CHARMED_SCHOOLBUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: TYING_TETHER
                },
                [BRAD]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FEIGNING_FEAR
                }
            }
        }
    }
]
