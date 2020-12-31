import {
    CUTOUT,
    FLAT,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    SHOPPING_CART,
    OVERPASS_SIGN_BACK,
} from '../../../../../app/constants/scene/things/cutouts'
import { VALLEY_FREEWAY } from '../../../../../app/constants/scene/things/flats'
import { FREEWAY_FENCE } from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [SHOPPING_CART]: {
            yIndex: 4,
            xPosition: 8,
        },
        [OVERPASS_SIGN_BACK]: {
            yIndex: 2,
            xPosition: 2.3,
            scaleFactor: 0.45,
        },
    },
    [FLAT]: {
        [VALLEY_FREEWAY]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.625,
        },
    },
    [PANEL]: {
        [FREEWAY_FENCE]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.76,
        },
    },
}
