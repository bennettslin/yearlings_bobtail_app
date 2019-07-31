import {
    FLAT
} from 'constants/scene'
import {
    PUBLIC_FAR_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_NEAR_RIGHT
} from 'constants/scene/things/flats'
import { OAKLAND_HOUSE_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [FLAT]: {
        [PUBLIC_FAR_LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_HOUSE_SHARED
        },
        [PUBLIC_FAR_RIGHT]: {
            yIndex: 1,
            xPosition: 11.25,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_HOUSE_SHARED
        },
        [PUBLIC_NEAR_LEFT]: {
            yIndex: 3,
            xPosition: 0,
            scaleFactor: 0.5,
            sharedStyle: OAKLAND_HOUSE_SHARED
        },
        [PUBLIC_NEAR_RIGHT]: {
            yIndex: 3,
            xPosition: 11,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
