import {
    BENNETT,
    AMY,
    WADE,
} from '../../../../../../app/constants/scene/actors'
import { SMOKER } from '../../../../../../app/constants/scene/actors/amy'
import { CATHOLIC_IDEA } from '../../../../../../app/constants/scene/actors/bennett'
import { CATHOLIC_GUY } from '../../../../../../app/constants/scene/actors/wade'

export default {
    [BENNETT]: {
        [CATHOLIC_IDEA]: {
            yIndex: 5,
            xPosition: 4.5,
        },
    },
    [AMY]: {
        [SMOKER]: {
            yIndex: 5,
            xPosition: 7.4,
        },
    },
    [WADE]: {
        [CATHOLIC_GUY]: {
            yIndex: 5,
            xPosition: 2,
        },
    },
}
