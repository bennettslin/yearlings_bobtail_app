import {
    PRETEEN_BENNETT,
    BRAD,
    ANDREW
} from '../../../constants/scene/actors'
import { THROWING } from '../../../constants/scene/actors/andrew'
import { GESTURING } from '../../../constants/scene/actors/brad'
import { STOIC } from '../../../constants/scene/actors/preteenBennett'

export default {
    [PRETEEN_BENNETT]: {
        [STOIC]: {
            yIndex: 3,
            xPosition: 7.5
        }
    },
    [BRAD]: {
        [GESTURING]: {
            yIndex: 4,
            xPosition: 1
        }
    },
    [ANDREW]: {
        [THROWING]: {
            yIndex: 4,
            xPosition: 3
        }
    }
}
