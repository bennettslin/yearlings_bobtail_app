import { CARDBOARD } from '../../../constants/scene/things'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT
} from '../../../constants/scene/things/cardboards'

export default {
    [CARDBOARD]: {
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1.5,
            zOffset: 0.5,
            scaleFactor: 0.2
        },
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 3,
            scaleFactor: 0.175,
            zOffset: 2.5
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 4.5,
            zOffset: 1,
            scaleFactor: 0.2
        }
    }
}
