import {
    BUBBLE,
    CUTOUT
} from '../../../constants/scene/things'
import { PHARMACY_CEL } from '../../../constants/scene/things/bubbles'
import { PHARMACY_AISLE } from '../../../constants/scene/things/cutouts'

export default {
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
