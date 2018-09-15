import {
    BACKDROPS,
    CUTOUTS,
    FLATS,
    FURNITURES
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_FURNITURES from './things/furnitures'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FLATS]: ARRANGEMENTS_FLATS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES
}

export default ARRANGEMENTS_THINGS
