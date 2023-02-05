import {
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    BUBBLE_SMALL__SCHOOLBUS,
    BUBBLE_MEDIUM__SCHOOLBUS,
    BUBBLE_LARGE__SCHOOLBUS,
} from '../../../../../src/constants/scene/things/bubbles'
import { BACKPACK_BENNETT } from '../../../../../src/constants/scene/things/fixtures'
import {
    DRIVING_HOUSE_LEFT,
    DRIVING_HOUSE__RIGHT,
} from '../../../../../src/constants/scene/things/flats'
import {
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_SEAT__LEFT,
    SCHOOLBUS_SEAT__RIGHT,
    SCHOOLBUS_EXTERIOR,
} from '../../../../../src/constants/scene/things/panels'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [BUBBLE]: {
        [BUBBLE_LARGE__SCHOOLBUS]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 1.05,
            zOffset: 5.8,
        },
        [BUBBLE_MEDIUM__SCHOOLBUS]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 1.3,
            zOffset: 6.71,
        },
        [BUBBLE_SMALL__SCHOOLBUS]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 1.7,
            zOffset: 7.1,
        },
    },
    [FIXTURE]: {
        [BACKPACK_BENNETT]: {
            yIndex: 2,
            xPosition: 3.5,
        },
    },
    [FLAT]: {
        [DRIVING_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 1.7,
        },
        [DRIVING_HOUSE__RIGHT]: {
            yIndex: 1,
            xPosition: 9.3,
        },
    },
    [PANEL]: {
        [SCHOOLBUS_INTERIOR]: {
            yIndex: 1,
        },
        [SCHOOLBUS_SEAT__LEFT]: {
            yIndex: 4,
            xPosition: 1.9,
            zOffset: 2,
        },
        [SCHOOLBUS_SEAT__RIGHT]: {
            yIndex: 4,
            xPosition: 4.9,
            zOffset: 2,
        },
        [SCHOOLBUS_EXTERIOR]: {
            yIndex: 4,
        },
    },
}
