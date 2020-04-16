import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { CLIFF_TREE } from '../../../constants/scene/things/cutouts'
import {
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR
} from '../../../constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [CLIFF_TREE]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [CLIFF_GRAVES_FAR]: {
            xPosition: 9.8,
            scaleFactor: 0.48
        },
        [CLIFF_GRAVES_NEAR]: {
            yIndex: 5,
            xPosition: 8.6,
            scaleFactor: 0.4
        }
    }
}
