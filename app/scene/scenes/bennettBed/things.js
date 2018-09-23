import {
    FIXTURES,
    DOORS,
    FURNITURES
} from 'constants/scene'

import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_FURNITURES from './things/furnitures'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [DOORS]: ARRANGEMENTS_DOORS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES
}

export default ARRANGEMENTS_THINGS
