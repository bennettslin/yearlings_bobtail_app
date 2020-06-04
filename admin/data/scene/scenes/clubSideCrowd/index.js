import {
    BENNETT,
    ANA,
    TOMER,
    AMY_STEPHANIE,
    WADE
} from '../../../../../app/constants/scene/actors'
import { PERFORMING } from '../../../../../app/constants/scene/actors/songs'
import { SQUEEZING } from '../../../../../app/constants/scene/actors/amyStephanie'
import { SHANE_SPILLING } from '../../../../../app/constants/scene/actors/tomer'
import { WATCHING } from '../../../../../app/constants/scene/actors/wade'

export default {
    [BENNETT]: {
        [PERFORMING]: {
            yIndex: 4,
            xPosition: 0.8
        }
    },
    [ANA]: {
        [PERFORMING]: {
            yIndex: 2,
            xPosition: 2.4
        }
    },
    [WADE]: {
        [WATCHING]: {
            yIndex: 4,
            xPosition: 4.7
        }
    },
    [AMY_STEPHANIE]: {
        [SQUEEZING]: {
            yIndex: 4,
            xPosition: 7
        }
    },
    [TOMER]: {
        [SHANE_SPILLING]: {
            yIndex: 4,
            xPosition: 9.5
        }
    }
}
