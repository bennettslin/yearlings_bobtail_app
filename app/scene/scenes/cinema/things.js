import {
    BACKDROPS,
    BUBBLES,
    CUTOUTS,
    DOORS,
    FLATS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_BUBBLES from './things/bubbles'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_FLATS from './things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [BUBBLES]: ARRANGEMENTS_BUBBLES,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [DOORS]: ARRANGEMENTS_DOORS,
    [FLATS]: ARRANGEMENTS_FLATS
}

export default ARRANGEMENTS_THINGS
