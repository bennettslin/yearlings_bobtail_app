import {
    CUTOUTS,
    FLATS,
    PUPPETS
} from 'constants/scene'

import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_PUPPETS from './things/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FLATS]: ARRANGEMENTS_FLATS,
    [PUPPETS]: ARRANGEMENTS_PUPPETS
}

export default ARRANGEMENTS_THINGS
