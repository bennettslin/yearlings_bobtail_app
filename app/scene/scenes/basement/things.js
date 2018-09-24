import {
    CUTOUTS,
    FIXTURES,
    DOORS
} from 'constants/scene'

import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_DOORS from './things/doors'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [DOORS]: ARRANGEMENTS_DOORS
}

export default ARRANGEMENTS_THINGS
