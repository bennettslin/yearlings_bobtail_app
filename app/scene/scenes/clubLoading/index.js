import {
    BENNETT,
    MARA,
    ANA,
    AMY,
    STEPHANIE,
    WADE
} from '../../../constants/scene/actors'
import {
    MINGLING,
    WAITING
} from '../../../constants/scene/actors/songs'
import { SIDELONG_HESITANCE } from '../../../constants/scene/actors/bennett'

export default {
    [BENNETT]: {
        [SIDELONG_HESITANCE]: {
            yIndex: 4,
            xPosition: 4.5
        }
    },
    [MARA]: {
        [WAITING]: {
            yIndex: 4,
            xPosition: 2.5
        }
    },
    [ANA]: {
        [WAITING]: {
            yIndex: 4,
            xPosition: 1
        }
    },
    [AMY]: {
        [MINGLING]: {
            yIndex: 4,
            xPosition: 7
        }
    },
    [STEPHANIE]: {
        [MINGLING]: {
            yIndex: 4,
            xPosition: 10
        }
    },
    [WADE]: {
        [MINGLING]: {
            yIndex: 4,
            xPosition: 8.5
        }
    }
}
