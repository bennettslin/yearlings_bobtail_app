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
            xPosition: 0.5,
            scaleFactor: 0.33
        },
        [PORCH_PLANTS_RIGHT]: {
            yIndex: 1,
            xPosition: 10.5,
            scaleFactor: 0.33
        }
    }
}

export default ARRANGEMENTS_THINGS
