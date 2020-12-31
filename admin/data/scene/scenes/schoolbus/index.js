import {
    PRETEEN_BENNETT,
    BRAD_SASHA,
} from '../../../../../app/constants/scene/actors'
import { CHARMED_SCHOOLBUS } from '../../../../../app/constants/scene/actors/bradSasha'
import { PANICKED } from '../../../../../app/constants/scene/actors/preteenBennett'

export default {
    [PRETEEN_BENNETT]: {
        [PANICKED]: {
            yIndex: 3,
            xPosition: 2.6,
            zOffset: 0.25,
        },
    },
    [BRAD_SASHA]: {
        [CHARMED_SCHOOLBUS]: {
            yIndex: 3,
            xPosition: 5.3,
            zOffset: -1.02,
        },
    },
}
