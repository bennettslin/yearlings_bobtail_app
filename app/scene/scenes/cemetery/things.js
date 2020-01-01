import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { GRAVESTONE } from '../../../constants/scene/things/cutouts'
import {
    CEMETERY_HILLS_LEFT,
    CEMETERY_HILLS_RIGHT
} from '../../../constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [GRAVESTONE]: {
            yIndex: 5,
            xPosition: 5.5,
            scaleFactor: 0.35
        }
    },
    [FLAT]: {
        [CEMETERY_HILLS_LEFT]: {
            yIndex: 1,
            xPosition: -1.25,
            scaleFactor: 0.4,
            trimBottom: 0.2,
            alignLeft: true
        },
        [CEMETERY_HILLS_RIGHT]: {
            yIndex: 2,
            xPosition: 12,
            scaleFactor: 0.4,
            trimBottom: 0.2,
            alignRight: true
        }
    }
}
