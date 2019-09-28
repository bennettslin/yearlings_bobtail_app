import {
    BACKDROP,
    CUTOUT,
    FLAT
} from '../../../constants/scene'
import { OAKLAND_FRONT_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    TWIN_STREETLAMP__FAR,
    TWIN_STREETLAMP__MIDDLE,
    TWIN_STREETLAMP__NEAR
} from '../../../constants/scene/things/cutouts'
import {
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_RIGHT
} from '../../../constants/scene/things/flats'
import { LAMPPOST__SHARED } from '../../shared'
import {
    OAKLAND_HOUSE__SHARED,
    OAKLAND_HOUSE_LEFT__SHARED,
    OAKLAND_HOUSE_RIGHT__SHARED
} from '../../shared/buildings'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OAKLAND_FRONT_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.05
        }
    },
    [CUTOUT]: {
        [TWIN_STREETLAMP__FAR]: {
            yIndex: 1,
            xPosition: 5.45,
            scaleFactor: 0.2,
            sharedStyle: LAMPPOST__SHARED
        },
        [TWIN_STREETLAMP__MIDDLE]: {
            yIndex: 2,
            xPosition: 5.55,
            scaleFactor: 0.25,
            sharedStyle: LAMPPOST__SHARED,
            flipHorizontal: true
        },
        [TWIN_STREETLAMP__NEAR]: {
            yIndex: 3,
            xPosition: 5.4,
            scaleFactor: 0.3,
            sharedStyle: LAMPPOST__SHARED
        }
    },
    [FLAT]: {
        [RESIDENTIAL_FAR_LEFT]: {
            yIndex: 1,
            xPosition: 2.75,
            scaleFactor: 0.36,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [RESIDENTIAL_FAR_RIGHT]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.36,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [RESIDENTIAL_MIDDLE_LEFT]: {
            yIndex: 2,
            xPosition: 1.75,
            scaleFactor: 0.42,
            sharedStyle: [
                OAKLAND_HOUSE__SHARED,
                OAKLAND_HOUSE_RIGHT__SHARED
            ]
        },
        [RESIDENTIAL_MIDDLE_RIGHT]: {
            yIndex: 2,
            xPosition: 9.25,
            scaleFactor: 0.42,
            sharedStyle: OAKLAND_HOUSE__SHARED
        },
        [RESIDENTIAL_NEAR_LEFT]: {
            yIndex: 3,
            xPosition: 0.75,
            scaleFactor: 0.5,
            sharedStyle: [
                OAKLAND_HOUSE__SHARED,
                OAKLAND_HOUSE_LEFT__SHARED
            ]
        },
        [RESIDENTIAL_NEAR_RIGHT]: {
            yIndex: 3,
            xPosition: 10.25,
            scaleFactor: 0.5,
            sharedStyle: OAKLAND_HOUSE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
