import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    CHRISTOPHER
} from '../../../constants/scene/actors'
import { TANTRUM } from '../../../constants/scene/actors/instances/christopher'
import { STOOPING } from '../../../constants/scene/actors/instances/mother'
import { CAUTIOUS } from '../../../constants/scene/actors/instances/preteenBennett'
import { DUCKING } from '../../../constants/scene/actors/instances/willy'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [CAUTIOUS]: {
            yIndex: 4,
            xPosition: 7
        }
    },
    [WILLY]: {
        [DUCKING]: {
            yIndex: 4,
            xPosition: 0.5
        }
    },
    [MOTHER]: {
        [STOOPING]: {
            yIndex: 2,
            xPosition: 4
        }
    },
    [CHRISTOPHER]: {
        [TANTRUM]: {
            yIndex: 5,
            xPosition: 9.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
