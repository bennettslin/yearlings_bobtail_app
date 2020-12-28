import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from '../../../../../app/constants/scene/things'
import {
    BUBBLE_SMALL__LEFT,
    BUBBLE_MEDIUM__LEFT,
    BUBBLE_LARGE__LEFT
} from '../../../../../app/constants/scene/things/bubbles'
import { BACKPACK_BENNETT } from '../../../../../app/constants/scene/things/fixtures'
import {
    DRIVING_HOUSE_LEFT,
    DRIVING_HOUSE__RIGHT
} from '../../../../../app/constants/scene/things/flats'
import {
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_SEAT__LEFT,
    SCHOOLBUS_SEAT__RIGHT,
    SCHOOLBUS_EXTERIOR
} from '../../../../../app/constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [BUBBLE_LARGE__LEFT]: {
            yIndex: 0,
            xPosition: 0,
            zOffset: 6.5
        },
        [BUBBLE_MEDIUM__LEFT]: {
            yIndex: 0,
            xPosition: 0.3,
            zOffset: 7.6
        },
        [BUBBLE_SMALL__LEFT]: {
            yIndex: 0,
            xPosition: 0.8,
            zOffset: 8
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
            xPosition: 1.7,
            scaleFactor: 0.6
        },
        [DRIVING_HOUSE__RIGHT]: {
            yIndex: 1,
            xPosition: 9.3,
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
            zOffset: 2,
            scaleFactor: 0.4
        },
        [SCHOOLBUS_SEAT__RIGHT]: {
            yIndex: 4,
            xPosition: 4.9,
            zOffset: 2,
            scaleFactor: 0.4
        },
        [SCHOOLBUS_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}
