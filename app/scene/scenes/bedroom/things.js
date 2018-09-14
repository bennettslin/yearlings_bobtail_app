import {
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PUPPETS
} from 'constants/scene'

import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_FURNITURES from './things/furnitures'
import ARRANGEMENTS_PUPPETS from './things/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [FLATS]: ARRANGEMENTS_FLATS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES,
    [PUPPETS]: ARRANGEMENTS_PUPPETS
}

export default ARRANGEMENTS_THINGS
