import { CUTOUTS } from 'constants/scene'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT
} from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [DISPENSER_LEFT]: {
            yIndex: 4,
            arrangement: {
                xFloat: 1,
                xWidth: 2,
                zHeight: 3
            }
        },
        [DISPENSER_RIGHT]: {
            yIndex: 4,
            arrangement: {
                xFloat: 3,
                xWidth: 2,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
