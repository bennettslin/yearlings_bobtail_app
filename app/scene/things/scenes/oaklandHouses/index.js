import {
    BACKDROPS,
    FLATS,
    PANELS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_PANELS from './things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [FLATS]: ARRANGEMENTS_FLATS,
    [PANELS]: ARRANGEMENTS_PANELS
}

export default ARRANGEMENTS_THINGS
