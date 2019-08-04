import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'
import {
    BUBBLE_SMALL__LEFT,
    BUBBLE_MEDIUM__LEFT,
    BUBBLE_LARGE__LEFT,
    THOUGHT_LARGE__LEFT
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
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_SEAT__LEFT,
    SCHOOLBUS_SEAT__RIGHT
} from 'constants/scene/things/panels'
import {
    BUBBLE_SHARED,
    INTERIOR_SHARED,
    OAKLAND_COMMERCIAL_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__LEFT]: {
            yIndex: 0,
            xPosition: 2,
            zOffset: 8,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__LEFT]: {
            yIndex: 0,
            xPosition: 1.5,
            zOffset: 7.75,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_LARGE__LEFT]: {
            yIndex: 0,
            xPosition: 1,
            zOffset: 7,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [THOUGHT_LARGE__LEFT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            sharedStyle: BUBBLE_SHARED
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
        },
        [SCHOOLBUS_SEAT__LEFT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 1
            }
        },
        [SCHOOLBUS_SEAT__RIGHT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
