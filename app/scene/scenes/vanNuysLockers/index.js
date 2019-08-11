import {
    PRETEEN_BENNETT,
    BRAD,
    ANDREW
} from '../../../constants/scene/actors'
import { THROWING } from '../../../constants/scene/actors/instances/andrew'
import { GESTURING } from '../../../constants/scene/actors/instances/brad'
import { STOIC } from '../../../constants/scene/actors/instances/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [STOIC]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7.5,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [BRAD]: {
        [GESTURING]: {
            yIndex: 4,
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANDREW]: {
        [THROWING]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
