import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    CHRISTOPHER
} from '../../keys'
import { TANTRUM } from '../../keys/instances/christopher'
import { STOOPING } from '../../keys/instances/mother'
import { CAUTIOUS } from '../../keys/instances/preteenBennett'
import { DUCKING } from '../../keys/instances/willy'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [CAUTIOUS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 7,
                xWidth: 1.5,
                zHeight: 4
            }
        }
    },
    [WILLY]: {
        [DUCKING]: {
            yIndex: 4,
            arrangement: {
                xPosition: 0.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MOTHER]: {
        [STOOPING]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 2,
                zHeight: 4
            }
        }
    },
    [CHRISTOPHER]: {
        [TANTRUM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
