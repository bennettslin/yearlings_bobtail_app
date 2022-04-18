import {
    BENNETT,
    MARA,
    ANA,
    AMY,
    STEPHANIE,
    WADE,
} from '../../../../../src/constants/scene/actors'
import {
    MINGLING,
    WAITING,
} from '../../../../../src/constants/scene/actors/songs'
import { SIDELONG_HESITANCE } from '../../../../../src/constants/scene/actors/bennett'

export default {
    [ANA]: {
        [WAITING]: {
            yIndex: 4,
            xPosition: 0.5,
            zOffset: -0.08,
        },
    },
    [MARA]: {
        [WAITING]: {
            yIndex: 4,
            xPosition: 2.3,
            zOffset: -0.08,
        },
    },
    [BENNETT]: {
        [SIDELONG_HESITANCE]: {
            yIndex: 4,
            xPosition: 4.7,
            zOffset: -0.06,
        },
    },
    [AMY]: {
        [MINGLING]: {
            yIndex: 4,
            xPosition: 7.3,
            zOffset: -0.07,
        },
    },
    [WADE]: {
        [MINGLING]: {
            yIndex: 4,
            xPosition: 8.7,
            zOffset: -0.06,
        },
    },
    [STEPHANIE]: {
        [MINGLING]: {
            yIndex: 4,
            xPosition: 10.5,
            zOffset: -0.07,
        },
    },
}
