import {
    BACKDROP,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'
import { SCHOOLBUS_THOUGHT_BACKDROP } from 'constants/scene/things/backdrops'
import {
    BACKPACK_BENNETT,
    BACKPACK_SASHA,
    BACKPACK_JEWISH_BOY
} from 'constants/scene/things/fixtures'
import {
    DRIVING_HOUSE_LEFT,
    DRIVING_HOUSE_RIGHT
} from 'constants/scene/things/flats'
import {
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR
} from 'constants/scene/things/panels'
import { INTERIOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SCHOOLBUS_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        }
    },
    [FIXTURE]: {
        [BACKPACK_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BACKPACK_SASHA]: {
            yIndex: 2,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BACKPACK_JEWISH_BOY]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FLAT]: {
        [DRIVING_HOUSE_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 3,
                xWidth: 4,
                zHeight: 4
            }
        },
        [DRIVING_HOUSE_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 4
            }
        }
    },
    [PANEL]: {
        [SCHOOLBUS_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.5,
            sharedStyle: INTERIOR_SHARED
        },
        [SCHOOLBUS_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
