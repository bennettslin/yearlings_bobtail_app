import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES
} from 'constants/scene'
import { VALLEY_BACKDROP } from '../../keys/backdrops'
import {
    OVERPASS_SIGN_BACK,
    OVERPASS_SIGN_FRONT
} from '../../keys/cutouts'
import { SHOPPING_CART_FULL } from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [VALLEY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [OVERPASS_SIGN_BACK]: {
            yIndex: 1,
            arrangement: {
                xFloat: 2,
                xWidth: 4,
                zHeight: 3
            }
        },
        [OVERPASS_SIGN_FRONT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 9,
                xWidth: 4,
                zHeight: 3
            }
        }
    },
    [FIXTURES]: {
        [SHOPPING_CART_FULL]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8,
                xWidth: 4,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
