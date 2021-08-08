import {
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { CLIFF_TREE } from '../../../../../src/constants/scene/things/cutouts'
import {
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [CLIFF_TREE]: {
            yIndex: 1,
            xPosition: 1,
        },
    },
    [FLAT]: {
        [CLIFF_GRAVES_FAR]: {
            xPosition: 9.8,
        },
        [CLIFF_GRAVES_NEAR]: {
            yIndex: 5,
            xPosition: 8.6,
        },
    },
}
