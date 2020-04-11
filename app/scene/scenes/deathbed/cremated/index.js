import {
    BENNETT,
    MIRIAM
} from '../../../../constants/scene/actors'
import { INFIRM } from '../../../../constants/scene/actors/bennett'
import { TENNIS } from '../../../../constants/scene/actors/miriam'

export default {
    [BENNETT]: {
        [INFIRM]: {
            yIndex: 3,
            xPosition: 2.6,
            zOffset: -0.06
        }
    },
    [MIRIAM]: {
        [TENNIS]: {
            yIndex: 3,
            xPosition: 9.5
        }
    }
}
