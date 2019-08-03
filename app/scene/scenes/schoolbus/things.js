import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'
import {
    BUBBLE_SMALL__SCHOOLBUS,
    BUBBLE_MEDIUM__SCHOOLBUS,
    BUBBLE_LARGE__SCHOOLBUS,
    THOUGHT_LARGE
} from 'constants/scene/things/bubbles'
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
import {
    INTERIOR_SHARED,
    OAKLAND_COMMERCIAL_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__SCHOOLBUS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        },
        [BUBBLE_MEDIUM__SCHOOLBUS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        },
        [BUBBLE_LARGE__SCHOOLBUS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        },
        [THOUGHT_LARGE]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6
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
            xPosition: 2,
            scaleFactor: 0.6,
            sharedStyle: OAKLAND_COMMERCIAL_SHARED
        },
        [DRIVING_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.6,
            sharedStyle: OAKLAND_COMMERCIAL_SHARED
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
