import {
    PRETEEN_BENNETT,
    MOTHER,
} from '../../../../../../app/constants/scene/actors'
import { COMFORTING } from '../../../../../../app/constants/scene/actors/mother'
import { FEARFUL } from '../../../../../../app/constants/scene/actors/preteenBennett'

export default {
    [PRETEEN_BENNETT]: {
        [FEARFUL]: {
            yIndex: 3,
            xPosition: 7.7,
            zOffset: -0.02,
            layerYIndex: 4,
        },
    },
    [MOTHER]: {
        [COMFORTING]: {
            yIndex: 4,
            xPosition: 4.2,
            zOffset: -1.35,
            layerYIndex: 5,
        },
    },
}
