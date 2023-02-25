import {
    BENNETT,
    MIRIAM,
} from '../../../../../../src/constants/scene/actors'
import { REMOVING_PANTS } from '../../../../../../src/constants/scene/actors/bennett'
import { PERFUMING } from '../../../../../../src/constants/scene/actors/miriam'

export default {
    [BENNETT]: {
        [REMOVING_PANTS]: {
            yIndex: 3,
            xPosition: 2.6,
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
