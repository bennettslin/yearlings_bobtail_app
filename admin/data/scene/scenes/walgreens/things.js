import {
    BACKDROP,
    CUTOUT,
} from '../../../../../app/constants/scene/things'
import { PHARMACY_CEL } from '../../../../../app/constants/scene/things/backdrops'
import { PHARMACY_AISLE } from '../../../../../app/constants/scene/things/cutouts'

export default {
    [BACKDROP]: {
        [PHARMACY_CEL]: {
            yIndex: 0,
            scaleFactor: 0.575,
        },
    },
    [CUTOUT]: {
        [PHARMACY_AISLE]: {
            yIndex: 1,
            scaleFactor: 0.475,
        },
    },
}
