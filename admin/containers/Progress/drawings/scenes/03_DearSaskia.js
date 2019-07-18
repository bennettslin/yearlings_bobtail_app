import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD_BENNETT,
    BRAD_SASHA
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
                    todo: true,
                    workedHours: 4.25,
                    instance: PANICKED
                },
                [BRAD_SASHA]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: CHARMED_SCHOOLBUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BRAD_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FEIGNING_FEAR
                }
            }
        }
    }
]
