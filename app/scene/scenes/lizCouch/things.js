import {
    BACKDROPS,
    BUBBLES,
    DOORS,
    FURNITURES,
    PUPPETS
} from 'constants/scene'

import ARRANGEMENTS_BACKDROPS from './things/backdrops'
import ARRANGEMENTS_BUBBLES from './things/bubbles'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_FURNITURES from './things/furnitures'
import ARRANGEMENTS_PUPPETS from './things/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: ARRANGEMENTS_BACKDROPS,
    [BUBBLES]: ARRANGEMENTS_BUBBLES,
    [DOORS]: ARRANGEMENTS_DOORS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES,
    [PUPPETS]: ARRANGEMENTS_PUPPETS
}

export default ARRANGEMENTS_THINGS
