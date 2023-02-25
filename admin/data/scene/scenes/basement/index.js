import {
    BENNETT,
    JACOB_MARA,
    ANA,
} from '../../../../../src/constants/scene/actors'
import { EATING } from '../../../../../src/constants/scene/actors/songs'

export default {
    [JACOB_MARA]: {
        [EATING]: {
            yIndex: 5,
            xPosition: 3.9,
        },
    },
    [ANA]: {
        [EATING]: {
            yIndex: 4,
            xPosition: 6.6,
            zOffset: -1.15,
            layerYIndex: 5,
        },
    },
    [BENNETT]: {
        [EATING]: {
            yIndex: 5,
            xPosition: 8.2,
        },
    },
}
