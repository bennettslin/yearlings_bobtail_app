import { FLAT } from '../../../constants/scene/things'
import {
    PUBLIC_FAR__GOLDEN_CORD,
    PUBLIC_NEAR__GOLDEN_CORD,
    OAKLAND_SCHOOL,
    OAKLAND_FLAG
} from '../../../constants/scene/things/flats'

export default {
    [FLAT]: {
        [PUBLIC_FAR__GOLDEN_CORD]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.4
        },
        [PUBLIC_NEAR__GOLDEN_CORD]: {
            yIndex: 3,
            xPosition: 0,
            scaleFactor: 0.5
        },
        [OAKLAND_SCHOOL]: {
            yIndex: 1,
            xPosition: 11.25,
            scaleFactor: 0.4
        },
        [OAKLAND_FLAG]: {
            yIndex: 3,
            xPosition: 11,
            scaleFactor: 0.5
        }
    }
}
