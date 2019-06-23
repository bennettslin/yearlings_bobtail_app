import {
    CUTOUT
} from 'constants/scene'
import {
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT
} from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [PORCH_PLANTS_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 0.5,
                xWidth: 2,
                zHeight: 3
            }
        },
        [PORCH_PLANTS_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 10.5,
                xWidth: 2,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
