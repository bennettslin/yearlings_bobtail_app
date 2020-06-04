import {
    BENNETT,
    MARA,
    ANA,
    AMY,
    STEPHANIE,
    WADE
} from '../../../../../app/constants/scene/actors'
import {
    MINGLING,
    WAITING
} from '../../../../../app/constants/scene/actors/songs'
import { SIDELONG_HESITANCE } from '../../../../../app/constants/scene/actors/bennett'

export default {
    [ANA]: {
        [WAITING]: {
            yIndex: 3,
            xPosition: 0.5,
            zOffset: -0.07
        }
    },
    [MARA]: {
        [WAITING]: {
            yIndex: 3,
            xPosition: 2.3,
            zOffset: -0.07
        }
    },
    [BENNETT]: {
        [SIDELONG_HESITANCE]: {
            yIndex: 3,
            xPosition: 4.7,
            zOffset: -0.05
        }
    },
    [AMY]: {
        [MINGLING]: {
            yIndex: 3,
            xPosition: 7.3,
            zOffset: -0.06
        }
    },
    [WADE]: {
        [MINGLING]: {
            yIndex: 3,
            xPosition: 8.7,
            zOffset: -0.05
        }
    },
    [STEPHANIE]: {
        [MINGLING]: {
            yIndex: 3,
            xPosition: 10.5,
            zOffset: -0.06
        }
    }
}
