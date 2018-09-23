import {
    CUTOUTS,
    DOORS,
    FIXTURES
} from 'constants/scene'

import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_FIXTURES from './things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [DOORS]: ARRANGEMENTS_DOORS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES
}

export default ARRANGEMENTS_THINGS
