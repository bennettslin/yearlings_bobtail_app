import {
    PRETEEN_BENNETT,
    BRAD,
    ANDREW
} from '../../../../../app/constants/scene/actors'
import { THROWING } from '../../../../../app/constants/scene/actors/andrew'
import { GESTURING } from '../../../../../app/constants/scene/actors/brad'
import { STOIC } from '../../../../../app/constants/scene/actors/preteenBennett'

export default {
    [BRAD]: {
        [GESTURING]: {
            yIndex: 4,
            xPosition: 1.2
        }
    },
    [ANDREW]: {
        [THROWING]: {
            yIndex: 4,
            xPosition: 3.8
        }
    },
    [PRETEEN_BENNETT]: {
        [STOIC]: {
            yIndex: 4,
            xPosition: 7.3
        }
    }
}
