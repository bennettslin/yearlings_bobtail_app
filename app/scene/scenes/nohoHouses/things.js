import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { FIRE_HYDRANT } from '../../../constants/scene/things/cutouts'
import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT
} from '../../../constants/scene/things/flats'
export default {
    [CUTOUT]: {
        [FIRE_HYDRANT]: {
            yIndex: 5,
            xPosition: 0.75,
            scaleFactor: 0.3
        }
    },
    [FLAT]: {
        [NOHO_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2.5,
            scaleFactor: 0.6
        },
        [NOHO_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 8.5,
            scaleFactor: 0.6
        }
    }
}
