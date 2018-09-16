import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_DOORS from './things/doors'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [FLATS]: ARRANGEMENTS_FLATS,
    [DOORS]: ARRANGEMENTS_DOORS
}

export default ARRANGEMENTS_THINGS
