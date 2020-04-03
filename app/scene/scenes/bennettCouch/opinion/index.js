import {
    BENNETT,
    CATHERINE
} from '../../../../constants/scene/actors'
import { SOLICITING_OPINION } from '../../../../constants/scene/actors/bennett'
import { QUIPPING } from '../../../../constants/scene/actors/catherine'

export default {
    [CATHERINE]: {
        [QUIPPING]: {
            yIndex: 3,
            xPosition: 2.5,
            zOffset: -1.22,
            layerYIndex: 4
        }
    },
    [BENNETT]: {
        [SOLICITING_OPINION]: {
            yIndex: 3,
            xPosition: 4.5,
            zOffset: -1.02,
            layerYIndex: 4
        }
    }
}
