import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    PUPPETS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_PUPPETS from './things/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [PUPPETS]: ARRANGEMENTS_PUPPETS
}

export default ARRANGEMENTS_THINGS
