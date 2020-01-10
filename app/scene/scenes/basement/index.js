import {
    BENNETT,
    JACOB_MARA,
    ANA
} from '../../../constants/scene/actors'
import { EATING } from '../../../constants/scene/actors/songs'

export default {
    [BENNETT]: {
        [EATING]: {
            yIndex: 5,
            xPosition: 9,
            zOffset: -1
        }
    },
    [JACOB_MARA]: {
        [EATING]: {
            yIndex: 5,
            xPosition: 4
        }
    },
    [ANA]: {
        [EATING]: {
            yIndex: 4,
            xPosition: 7,
            zOffset: -1
        }
    }
}
