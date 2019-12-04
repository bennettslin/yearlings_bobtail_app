import {
    BACKDROP,
    FLAT
} from '../../../constants/scene/things'
import { OAKLAND_FRONT__MIDWAY } from '../../../constants/scene/things/backdrops'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from '../../../constants/scene/things/flats'
import { OAKLAND_COMMERCIAL__SHARED } from '../../shared/buildings'
const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_FRONT__MIDWAY]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.15,
            flipHorizontal: true
        }
    },
    [FLAT]: {
        [COMMERCIAL_CENTRE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        },
        [COMMERCIAL_FAR_LEFT]: {
            yIndex: 2,
            xPosition: 1.75,
            scaleFactor: 0.32,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        },
        [COMMERCIAL_FAR_RIGHT]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.32,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        },
        [COMMERCIAL_MIDDLE_LEFT]: {
            yIndex: 3,
            xPosition: 1,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        },
        [COMMERCIAL_MIDDLE_RIGHT]: {
            yIndex: 3,
            xPosition: 10,
            scaleFactor: 0.4,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        },
        [COMMERCIAL_NEAR_LEFT]: {
            yIndex: 4,
            xPosition: 0,
            scaleFactor: 0.5,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        },
        [COMMERCIAL_NEAR_RIGHT]: {
            yIndex: 4,
            xPosition: 11,
            scaleFactor: 0.5,
            sharedStyle: OAKLAND_COMMERCIAL__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
