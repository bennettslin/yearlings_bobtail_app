import {
    FLATS,
    FURNITURES,
    PANELS
} from 'constants/scene'

import ARRANGEMENTS_FLATS from './things/flats'
import ARRANGEMENTS_FURNITURES from './things/furnitures'
import ARRANGEMENTS_PANELS from './things/panels'

const ARRANGEMENTS_THINGS = {
    [FLATS]: ARRANGEMENTS_FLATS,
    [FURNITURES]: ARRANGEMENTS_FURNITURES,
    [PANELS]: ARRANGEMENTS_PANELS
}

export default ARRANGEMENTS_THINGS
