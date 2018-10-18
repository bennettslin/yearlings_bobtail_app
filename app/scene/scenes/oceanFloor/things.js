import {
    CUTOUTS,
    FLATS,
    PANELS
} from 'constants/scene'

import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_PANELS from './things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FLATS]: ARRANGEMENTS_FLATS,
    [PANELS]: ARRANGEMENTS_PANELS
}

export default ARRANGEMENTS_THINGS
