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
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PANICKED
                },
                [BRAD]: {
                    jewishBoy: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: CHARMED_SCHOOLBUS
                    }
                },
                [SASHA]: {
                    colourLayers: true,
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
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: TYING_TETHER
                },
                [BRAD]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    colourLayers: true,
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
