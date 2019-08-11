import {
    BUBBLE,
    CUTOUT
} from '../../../constants/scene'
import { PHARMACY_CEL } from '../../../constants/scene/things/bubbles'
import { PHARMACY_AISLE } from '../../../constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [PHARMACY_CEL]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.575
        }
    },
    [CUTOUT]: {
        [PHARMACY_AISLE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.475
        }
    }
}

export default ARRANGEMENTS_THINGS
