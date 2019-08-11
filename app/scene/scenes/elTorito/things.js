import { CUTOUT } from '../../../constants/scene'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT
} from '../../../constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [DISPENSER_LEFT]: {
            yIndex: 5,
            xPosition: 1,
            scaleFactor: 0.3
        },
        [DISPENSER_RIGHT]: {
            yIndex: 5,
            xPosition: 10,
            scaleFactor: 0.3
        }
    }
}

export default ARRANGEMENTS_THINGS
