import {
    BUBBLES,
    CUTOUTS,
    DOORS,
    FURNITURES
} from 'constants/scene'

import ARRANGEMENTS_BUBBLES from './things/bubbles'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_FURNITURES from './things/furnitures'

const ARRANGEMENTS_THINGS = {
    [BUBBLES]: ARRANGEMENTS_BUBBLES,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [DOORS]: ARRANGEMENTS_DOORS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES
}

export default ARRANGEMENTS_THINGS
