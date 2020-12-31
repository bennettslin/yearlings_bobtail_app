import {
    BENNETT,
    MIRIAM,
} from '../../../../../../app/constants/scene/actors'
import { DISPOSING_CONDOM } from '../../../../../../app/constants/scene/actors/bennett'
import { REVERSING } from '../../../../../../app/constants/scene/actors/miriam'

export default {
    [BENNETT]: {
        [DISPOSING_CONDOM]: {
            yIndex: 3,
            xPosition: 2.2,
            zOffset: -0.95,
            layerYIndex: 4,
        },
    },
    [MIRIAM]: {
        [REVERSING]: {
            yIndex: 3,
            xPosition: 3.4,
            zOffset: 1,
        },
    },
}
