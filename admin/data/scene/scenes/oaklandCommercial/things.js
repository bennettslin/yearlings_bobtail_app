import { FLAT } from '../../../../../src/constants/scene/things'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [FLAT]: {
        [COMMERCIAL_CENTRE]: {
            yIndex: 1,
        },
        [COMMERCIAL_FAR_LEFT]: {
            yIndex: 2,
            xPosition: 1.8,
        },
        [COMMERCIAL_FAR_RIGHT]: {
            yIndex: 2,
            xPosition: 9.2,
        },
        [COMMERCIAL_MIDDLE_LEFT]: {
            yIndex: 3,
            xPosition: 0.7,
        },
        [COMMERCIAL_MIDDLE_RIGHT]: {
            yIndex: 3,
            xPosition: 10.4,
        },
        [COMMERCIAL_NEAR_LEFT]: {
            yIndex: 4,
            xPosition: -0.3,
        },
        [COMMERCIAL_NEAR_RIGHT]: {
            yIndex: 4,
            xPosition: 11.2,
        },
    },
}
