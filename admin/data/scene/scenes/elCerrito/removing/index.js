import {
    BENNETT,
    MIRIAM,
} from '../../../../../../app/constants/scene/actors'
import { REMOVING_PANTS } from '../../../../../../app/constants/scene/actors/bennett'
import { PERFUMING } from '../../../../../../app/constants/scene/actors/miriam'

export default {
    [BENNETT]: {
        [REMOVING_PANTS]: {
            yIndex: 3,
            xPosition: 2.6,
            zOffset: 0,
        },
    },
    [MIRIAM]: {
        [PERFUMING]: {
            yIndex: 3,
            xPosition: 3.5,
            zOffset: 1,
        },
    },
}
