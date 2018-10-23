import {
    BUBBLES,
    CUTOUTS,
    DOORS
} from 'constants/scene'

import ARRANGEMENTS_BUBBLES from './things/bubbles'
import ARRANGEMENTS_CUTOUTS from './things/cutouts'
import ARRANGEMENTS_DOORS from './things/doors'

const ARRANGEMENTS_THINGS = {
    [BUBBLES]: ARRANGEMENTS_BUBBLES,
    [CUTOUTS]: ARRANGEMENTS_CUTOUTS,
    [DOORS]: ARRANGEMENTS_DOORS
}

export default ARRANGEMENTS_THINGS
