import {
    BENNETT,
    AMY,
    STEPHANIE,
    WADE
} from '../../../../constants/scene/actors'
import { PROTESTER } from '../../../../constants/scene/actors/songs'
import { DEMONSTRATION } from '../../../../constants/scene/actors/bennett'

export default {
    [BENNETT]: {
        [DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 7
        }
    },
    [AMY]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 9
        }
    },
    [STEPHANIE]: {
        [PROTESTER]: {
            yIndex: 4,
            xPosition: 3
        }
    },
    [WADE]: {
        [PROTESTER]: {
            yIndex: 4,
            xPosition: 4.75
        }
    }
}
