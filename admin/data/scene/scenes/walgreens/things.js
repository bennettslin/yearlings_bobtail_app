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
        },
    },
    [CUTOUT]: {
        [PHARMACY_AISLE]: {
            yIndex: 1,
        },
    },
}
