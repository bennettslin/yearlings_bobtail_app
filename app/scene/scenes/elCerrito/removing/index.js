import {
    BENNETT,
    MIRIAM
} from '../../../../constants/scene/actors'
import { REMOVING_PANTS } from '../../../../constants/scene/actors/bennett'
import { PERFUMING } from '../../../../constants/scene/actors/miriam'

export default {
    [BENNETT]: {
        [REMOVING_PANTS]: {
            yIndex: 3,
            xPosition: 3
        }
    },
    [MIRIAM]: {
        [PERFUMING]: {
            yIndex: 3,
            xPosition: 4.25,
            zOffset: 0.75
        }
    }
}
