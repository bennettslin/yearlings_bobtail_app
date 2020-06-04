import {
    BENNETT,
    MIRIAM
} from '../../../../../../app/constants/scene/actors'
import { INFIRM } from '../../../../../../app/constants/scene/actors/bennett'
import { TENNIS } from '../../../../../../app/constants/scene/actors/miriam'

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
