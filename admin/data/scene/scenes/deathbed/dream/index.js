import {
    BENNETT_LIZ,
    AMY,
} from '../../../../../../src/constants/scene/actors'
import { DOCTOR } from '../../../../../../src/constants/scene/actors/amy'
import { FINAL_DREAM } from '../../../../../../src/constants/scene/actors/bennettLiz'

export default {
    [BENNETT_LIZ]: {
        [FINAL_DREAM]: {
            yIndex: 4,
            xPosition: 9.2,
            zOffset: -1.5,
        },
    },
    [AMY]: {
        [DOCTOR]: {
            yIndex: 4,
            xPosition: 1.65,
            layerYIndex: 5,
        },
    },
}
