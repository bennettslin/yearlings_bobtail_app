import {
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { GRAVESTONE } from '../../../../../src/constants/scene/things/cutouts'
import {
    CEMETERY_HILLS_LEFT,
    CEMETERY_HILLS_RIGHT,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [GRAVESTONE]: {
            yIndex: 5,
        },
    },
    [FLAT]: {
        [CEMETERY_HILLS_LEFT]: {
            yIndex: 2,
            xPosition: 1.1,
        },
        [CEMETERY_HILLS_RIGHT]: {
            yIndex: 2,
            xPosition: 9.1,
        },
    },
}
