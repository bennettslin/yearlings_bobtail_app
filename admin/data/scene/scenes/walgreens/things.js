import {
    BACKDROP,
    CUTOUT,
} from '../../../../../src/constants/scene/things'
import { PHARMACY_CEL } from '../../../../../src/constants/scene/things/backdrops'
import { PHARMACY_AISLE } from '../../../../../src/constants/scene/things/cutouts'

export default {
    [BACKDROP]: {
        [PHARMACY_CEL]: {
            yIndex: 0,
        },
    },
    [CUTOUT]: {
        [PHARMACY_AISLE]: {
            yIndex: 1,
        },
    },
}
