import {
    BENNETT,
    ANA,
    TOMER,
    AMY_STEPHANIE,
    WADE
} from '../../../constants/scene/actors'
import { PERFORMING } from '../../../constants/scene/actors/instances/songs'
import { SQUEEZING } from '../../../constants/scene/actors/instances/amyStephanie'
import { SHANE_SPILLING } from '../../../constants/scene/actors/instances/tomer'
import { WATCHING } from '../../../constants/scene/actors/instances/wade'

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
