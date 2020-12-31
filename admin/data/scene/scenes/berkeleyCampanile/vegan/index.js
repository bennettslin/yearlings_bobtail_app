import {
    BENNETT,
    AMY,
    STEPHANIE,
    WADE,
} from '../../../../../../app/constants/scene/actors'
import { PROTESTER } from '../../../../../../app/constants/scene/actors/songs'
import { DEMONSTRATION } from '../../../../../../app/constants/scene/actors/bennett'

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
