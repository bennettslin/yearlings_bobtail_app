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
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MARA]: {
        [WAITING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [ANA]: {
        [WAITING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [AMY]: {
        [MINGLING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [STEPHANIE]: {
        [MINGLING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [WADE]: {
        [MINGLING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}
