import { CUTOUT } from 'constants/scene'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [DISPENSER_LEFT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 1,
                xWidth: 2,
                zHeight: 3
            }
        },
        [DISPENSER_RIGHT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3,
                xWidth: 2,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
