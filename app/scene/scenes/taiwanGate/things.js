import {
    BACKDROPS,
    CUTOUTS,
    DOORS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_DOORS from './things/doors'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [DOORS]: ARRANGEMENTS_DOORS
}

export default ARRANGEMENTS_THINGS
