import {
    BACKDROP,
    CUTOUT,
    FIXTURE,
    FLAT
} from 'constants/scene'
import { VALLEY_BACKDROP } from 'constants/scene/things/backdrops'
import { OVERPASS_SIGN_BACK } from 'constants/scene/things/cutouts'
import { SHOPPING_CART } from 'constants/scene/things/fixtures'
import { VALLEY_FREEWAY } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [VALLEY_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CUTOUT]: {
        [OVERPASS_SIGN_BACK]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.3,
            zOffset: 1.5
        }
    },
    [FIXTURE]: {
        [SHOPPING_CART]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 3
            }
        }
    },
    [FLAT]: {
        [VALLEY_FREEWAY]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
