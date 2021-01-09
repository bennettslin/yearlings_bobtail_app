import {
    CUTOUT,
    FLAT,
} from '../../../../../app/constants/scene/things'
import { GRAVESTONE } from '../../../../../app/constants/scene/things/cutouts'
import {
    CEMETERY_HILLS_LEFT,
    CEMETERY_HILLS_RIGHT,
} from '../../../../../app/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [GRAVESTONE]: {
            yIndex: 5,
            xPosition: 5.5,
        },
    },
    [FLAT]: {
        [CEMETERY_HILLS_LEFT]: {
            yIndex: 1,
            xPosition: 1.2,
            scaleFactor: 0.4,
            trimBottom: 0.2,
        },
        [CEMETERY_HILLS_RIGHT]: {
            yIndex: 2,
            xPosition: 8.8,
            scaleFactor: 0.4,
            trimBottom: 0.2,
        },
    },
}
