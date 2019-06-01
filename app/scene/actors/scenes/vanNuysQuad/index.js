import {
    PRETEEN_BENNETT,
    SASHA,
    BRAD,
    ANDREW
} from '../../keys'
import { NOODLING } from '../../keys/instances/andrew'
import { SNACKING } from '../../keys/instances/brad'
import { WISTFUL } from '../../keys/instances/preteenBennett'
import { POPULAR_GIRL } from '../../keys/instances/sasha'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [WISTFUL]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3.5,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [SASHA]: {
        [POPULAR_GIRL]: {
            yIndex: 5,
            arrangement: {
                xPosition: 7.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [BRAD]: {
        [SNACKING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANDREW]: {
        [NOODLING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
