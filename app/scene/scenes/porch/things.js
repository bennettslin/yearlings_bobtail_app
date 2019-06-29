import {
    CUTOUT
} from 'constants/scene'
import {
    PORCH_PLANT__LEFT,
    PORCH_PLANT__RIGHT
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [PORCH_PLANT__LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.3
        },
        [PORCH_PLANT__RIGHT]: {
            yIndex: 1,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    }
}

export default ARRANGEMENTS_THINGS
