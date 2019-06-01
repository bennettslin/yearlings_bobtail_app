import {
    BENNETT,
    ANA,
    TOMER,
    AMY_STEPHANIE,
    WADE
} from '../../keys'
import { PERFORMING } from '../../keys/instances/songs'
import { SQUEEZING } from '../../keys/instances/amyStephanie'
import { SHANE_SPILLING } from '../../keys/instances/tomer'
import { WATCHING } from '../../keys/instances/wade'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [PERFORMING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANA]: {
        [PERFORMING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TOMER]: {
        [SHANE_SPILLING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [AMY_STEPHANIE]: {
        [SQUEEZING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [WADE]: {
        [WATCHING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
