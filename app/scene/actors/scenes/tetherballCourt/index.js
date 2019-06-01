import {
    BRAD_BENNETT,
    SASHA,
    ANDREW
} from '../../keys'
import { FEIGNING_FEAR } from '../../keys/instances/andrew'
import { TYING_TETHER } from '../../keys/instances/bradBennett'
import { INDIGNANT } from '../../keys/instances/sasha'

const ARRANGEMENTS_ACTORS = {
    [BRAD_BENNETT]: {
        [TYING_TETHER]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [SASHA]: {
        [INDIGNANT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANDREW]: {
        [FEIGNING_FEAR]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
