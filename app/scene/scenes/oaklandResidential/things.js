import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
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

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [TWIN_STREETLAMP__FAR]: {
            yIndex: 1,
            xPosition: 5.45,
            scaleFactor: 0.2
        },
        [TWIN_STREETLAMP__MIDDLE]: {
            yIndex: 2,
            xPosition: 5.55,
            scaleFactor: 0.25,
            flipHorizontal: true
        },
        [TWIN_STREETLAMP__NEAR]: {
            yIndex: 3,
            xPosition: 5.4,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
        [RESIDENTIAL_FAR_LEFT]: {
            yIndex: 1,
            xPosition: 2.75,
            scaleFactor: 0.36
        },
        [RESIDENTIAL_FAR_RIGHT]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.36
        },
        [RESIDENTIAL_MIDDLE_LEFT]: {
            yIndex: 2,
            xPosition: 1.75,
            scaleFactor: 0.42
        },
        [RESIDENTIAL_MIDDLE_RIGHT]: {
            yIndex: 2,
            xPosition: 9.25,
            scaleFactor: 0.42
        },
        [RESIDENTIAL_NEAR_LEFT]: {
            yIndex: 3,
            xPosition: 0.75,
            scaleFactor: 0.5
        },
        [RESIDENTIAL_NEAR_RIGHT]: {
            yIndex: 3,
            xPosition: 10.25,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
