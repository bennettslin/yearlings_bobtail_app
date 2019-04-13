import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FURNITURES
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FIXTURES from '../taiwanRoom/things/fixtures'
import ARRANGEMENTS_FURNITURES from '../taiwanRoom/things/furnitures'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [FURNITURES]: ARRANGEMENTS_FURNITURES
}

export default ARRANGEMENTS_THINGS
