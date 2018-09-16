import {
    FIXTURES,
    DOORS,
    PANELS
} from 'constants/scene'

import ARRANGEMENTS_FIXTURES from './things/fixtures'
import ARRANGEMENTS_DOORS from './things/doors'
import ARRANGEMENTS_PANELS from './things/panels'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: ARRANGEMENTS_FIXTURES,
    [DOORS]: ARRANGEMENTS_DOORS,
    [PANELS]: ARRANGEMENTS_PANELS
}

export default ARRANGEMENTS_THINGS
