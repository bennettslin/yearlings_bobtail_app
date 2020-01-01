import {
    BENNETT,
    ANA,
    TOMER,
    AMY_STEPHANIE,
    WADE
} from '../../../constants/scene/actors'
import { PERFORMING } from '../../../constants/scene/actors/songs'
import { SQUEEZING } from '../../../constants/scene/actors/amyStephanie'
import { SHANE_SPILLING } from '../../../constants/scene/actors/tomer'
import { WATCHING } from '../../../constants/scene/actors/wade'

export default {
    [BENNETT]: {
        [PERFORMING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [ANA]: {
        [PERFORMING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [TOMER]: {
        [SHANE_SPILLING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [AMY_STEPHANIE]: {
        [SQUEEZING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [WADE]: {
        [WATCHING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}
