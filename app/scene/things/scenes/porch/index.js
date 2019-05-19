import {
    CUTOUTS,
    FIXTURES
} from 'constants/scene'
import {
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT
} from '../../keys/cutouts'
import { HAIRCUT_SCISSORS } from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [PORCH_PLANTS_LEFT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 0.5,
                xWidth: 2,
                zHeight: 3
            }
        },
        [PORCH_PLANTS_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 10.5,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [FIXTURES]: {
        [HAIRCUT_SCISSORS]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8,
                xWidth: 4,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
