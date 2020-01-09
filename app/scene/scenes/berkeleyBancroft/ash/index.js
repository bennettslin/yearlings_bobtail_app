import {
    BENNETT,
    AMY,
    WADE
} from 'constants/scene/actors'
import { SMOKER } from 'constants/scene/actors/amy'
import { CATHOLIC_IDEA } from 'constants/scene/actors/bennett'
import { CATHOLIC_GUY } from 'constants/scene/actors/wade'

export default {
    [BENNETT]: {
        [CATHOLIC_IDEA]: {
            yIndex: 5,
            xPosition: 4.5
        }
    },
    [AMY]: {
        [SMOKER]: {
            yIndex: 5,
            xPosition: 7.25
        }
    },
    [WADE]: {
        [CATHOLIC_GUY]: {
            yIndex: 5,
            xPosition: 2
        }
    }
}
