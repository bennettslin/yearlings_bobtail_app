import { FLAT } from '../../../../../app/constants/scene/things'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from '../../../../../app/constants/scene/things/flats'

export default {
    [FLAT]: {
        [COMMERCIAL_CENTRE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.4
        },
        [COMMERCIAL_FAR_LEFT]: {
            yIndex: 2,
            xPosition: 1.75,
            scaleFactor: 0.32
        },
        [COMMERCIAL_FAR_RIGHT]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.32
        },
        [COMMERCIAL_MIDDLE_LEFT]: {
            yIndex: 3,
            xPosition: 1,
            scaleFactor: 0.4
        },
        [COMMERCIAL_MIDDLE_RIGHT]: {
            yIndex: 3,
            xPosition: 10,
            scaleFactor: 0.4
        },
        [COMMERCIAL_NEAR_LEFT]: {
            yIndex: 4,
            xPosition: 0,
            scaleFactor: 0.5
        },
        [COMMERCIAL_NEAR_RIGHT]: {
            yIndex: 4,
            xPosition: 11,
            scaleFactor: 0.5
        }
    }
}