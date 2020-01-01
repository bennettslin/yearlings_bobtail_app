import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import {
    SHOPPING_CART,
    OVERPASS_SIGN_BACK
} from '../../../constants/scene/things/cutouts'
import { VALLEY_FREEWAY } from '../../../constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [SHOPPING_CART]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.2
        },
        [OVERPASS_SIGN_BACK]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.3,
            zOffset: 1
        }
    },
    [FLAT]: {
        [VALLEY_FREEWAY]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.625
        }
    }
}
