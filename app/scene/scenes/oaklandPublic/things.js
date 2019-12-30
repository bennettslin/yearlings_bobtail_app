import {
    BACKDROP,
    FLAT
} from '../../../constants/scene/things'
import { OAKLAND_FRONT__LOW } from '../../../constants/scene/things/backdrops'
import {
    PUBLIC_FAR__GOLDEN_CORD,
    PUBLIC_NEAR__GOLDEN_CORD,
    OAKLAND_SCHOOL,
    OAKLAND_FLAG
} from '../../../constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_FRONT__LOW]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.5
        }
    },
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

export default ARRANGEMENTS_THINGS
