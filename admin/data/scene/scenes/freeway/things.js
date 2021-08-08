import {
    CUTOUT,
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    SHOPPING_CART,
    OVERPASS_SIGN_BACK,
} from '../../../../../src/constants/scene/things/cutouts'
import { VALLEY_FREEWAY } from '../../../../../src/constants/scene/things/flats'
import { FREEWAY_FENCE } from '../../../../../src/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [SHOPPING_CART]: {
            yIndex: 4,
            xPosition: 8,
        },
        [OVERPASS_SIGN_BACK]: {
            yIndex: 2,
            xPosition: 2.3,
        },
    },
    [FLAT]: {
        [VALLEY_FREEWAY]: {
            yIndex: 1,
        },
    },
    [PANEL]: {
        [FREEWAY_FENCE]: {
            yIndex: 3,
        },
    },
}
