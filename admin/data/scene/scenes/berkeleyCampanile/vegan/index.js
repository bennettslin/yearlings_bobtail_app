import {
    BENNETT,
    AMY,
    STEPHANIE,
    WADE
} from '../../../../../../app/constants/scene/actors'
import { PROTESTER } from '../../../../../../app/constants/scene/actors/songs'
import { DEMONSTRATION } from '../../../../../../app/constants/scene/actors/bennett'

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
