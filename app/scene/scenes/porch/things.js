import {
    CUTOUT
} from 'constants/scene'
import {
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [PORCH_PLANTS_LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.3
        },
        [PORCH_PLANTS_RIGHT]: {
            yIndex: 1,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    }
}

export default ARRANGEMENTS_THINGS
