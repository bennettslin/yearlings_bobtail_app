import {
    BENNETT,
    AMY,
    STEPHANIE,
    WADE
} from '../../../../constants/scene/actors'
import { PROTESTER } from '../../../../constants/scene/actors/songs'
import { DEMONSTRATION } from '../../../../constants/scene/actors/bennett'

export default {
    [STEPHANIE]: {
        [PROTESTER]: {
            yIndex: 4,
            xPosition: 2.8
        }
    },
    [WADE]: {
        [PROTESTER]: {
            yIndex: 4,
            xPosition: 4.5,
            layerYIndex: 5
        }
    },
    [BENNETT]: {
        [DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 6.9
        }
    },
    [AMY]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 8.7
        }
    }
}
