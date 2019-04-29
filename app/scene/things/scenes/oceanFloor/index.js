import {
    BACKDROPS,
    CUTOUTS,
    PANELS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_PANELS from './things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [PANELS]: ARRANGEMENTS_PANELS
}

export default ARRANGEMENTS_THINGS
