import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from '../../../constants/scene/things'
import {
    BUBBLE_SMALL__LEFT,
    BUBBLE_MEDIUM__LEFT,
    BUBBLE_LARGE__LEFT,
    THOUGHT_LARGE__LEFT
} from '../../../constants/scene/things/bubbles'
import { BACKPACK_BENNETT } from '../../../constants/scene/things/fixtures'
import {
    DRIVING_HOUSE_LEFT,
    DRIVING_HOUSE_RIGHT
} from '../../../constants/scene/things/flats'
import {
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_SEAT__LEFT,
    SCHOOLBUS_SEAT__RIGHT,
    SCHOOLBUS_EXTERIOR
} from '../../../constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [BUBBLE_SMALL__LEFT]: {
            yIndex: 0,
            xPosition: 2,
            zOffset: 8,
            scaleFactor: 0.4
        },
        [BUBBLE_MEDIUM__LEFT]: {
            yIndex: 0,
            xPosition: 1.5,
            zOffset: 7.75,
            scaleFactor: 0.4
        },
        [BUBBLE_LARGE__LEFT]: {
            yIndex: 0,
            xPosition: 1,
            zOffset: 7,
            scaleFactor: 0.4
        },
        [THOUGHT_LARGE__LEFT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6
        }
    },
    [FIXTURE]: {
        [BACKPACK_BENNETT]: {
            yIndex: 2,
            xPosition: 3.5
        }
    },
    [FLAT]: {
        [DRIVING_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.6
        },
        [DRIVING_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.6
        }
    },
    [PANEL]: {
        [SCHOOLBUS_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.5
        },
        [SCHOOLBUS_SEAT__LEFT]: {
            yIndex: 4,
            xPosition: 1.9,
            zOffset: 2.6,
            scaleFactor: 0.4
        },
        [SCHOOLBUS_SEAT__RIGHT]: {
            yIndex: 4,
            xPosition: 4.9,
            zOffset: 2.6,
            scaleFactor: 0.4
        },
        [SCHOOLBUS_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}
