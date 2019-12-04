import {
    FLAT
} from '../../../constants/scene/things'
import {
    PUBLIC_FAR_LEFT,
    PUBLIC_NEAR_LEFT,
    OAKLAND_SCHOOL,
    OAKLAND_FLAG
} from '../../../constants/scene/things/flats'
import { OAKLAND_HOUSE__SHARED } from '../../shared/buildings'

const ARRANGEMENTS_THINGS = {
    [FLAT]: {
        [PUBLIC_FAR_LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [OAKLAND_SCHOOL]: {
            yIndex: 1,
            xPosition: 11.25,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [PUBLIC_NEAR_LEFT]: {
            yIndex: 3,
            xPosition: 0,
            scaleFactor: 0.5,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [OAKLAND_FLAG]: {
            yIndex: 3,
            xPosition: 11,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
