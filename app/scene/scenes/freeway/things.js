import {
    BACKDROP,
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { VALLEY_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    SHOPPING_CART,
    OVERPASS_SIGN_BACK
} from '../../../constants/scene/things/cutouts'
import { VALLEY_FREEWAY } from '../../../constants/scene/things/flats'
import { GARBAGE_BAG__SHARED } from '../../shared/food'
import { FREEWAY_SIGN__SHARED } from '../../shared/outdoor'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [VALLEY_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.65,
            trimBottom: 0.05
        }
    },
    [CUTOUT]: {
        [SHOPPING_CART]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.2,
            sharedStyle: GARBAGE_BAG__SHARED
        },
        [OVERPASS_SIGN_BACK]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.3,
            zOffset: 1,
            sharedStyle: FREEWAY_SIGN__SHARED
        }
    },
    [FLAT]: {
        [VALLEY_FREEWAY]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.625,
            sharedStyle: FREEWAY_SIGN__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
