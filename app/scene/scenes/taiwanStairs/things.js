import {
    CUTOUTS,
    FIXTURES,
    DOORS,
    FURNITURES
} from 'constants/scene'

import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_FURNITURES from './things/furnitures'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [FURNITURES]: ARRANGEMENTS_FURNITURES,
    [DOORS]: ARRANGEMENTS_DOORS
}

export default ARRANGEMENTS_THINGS
