import {
    BACKDROPS,
    BUBBLES,
    CUTOUTS,
    FURNITURES
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_BUBBLES from './things/bubbles'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FURNITURES from './things/furnitures'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [BUBBLES]: ARRANGEMENTS_BUBBLES,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES
}

export default ARRANGEMENTS_THINGS
