import {
    BENNETT,
    AMY,
    STEPHANIE,
    WADE,
} from '../../../../../../src/constants/scene/actors'
import { PROTESTER } from '../../../../../../src/constants/scene/actors/songs'
import { DEMONSTRATION } from '../../../../../../src/constants/scene/actors/bennett'

export default {
    [STEPHANIE]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 2.9,
        },
    },
    [WADE]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 4.6,
            layerYIndex: 5,
        },
    },
    [BENNETT]: {
        [DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 7,
        },
    },
    [AMY]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 8.8,
        },
    },
}
