import {
    CARDBOARD,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    SNOWGLOBE_SMALL_PAST,
    SNOWGLOBE_ENRAGED_SOBBING,
} from '../../../../../src/constants/scene/things/cardboards'
import { TETHERBALL_POLE } from '../../../../../src/constants/scene/things/fixtures'
import { SNOWGLOBE_PAST } from '../../../../../src/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL_PAST]: {
            yIndex: 0,
            xPosition: 6.5,
            zOffset: 7.5,
            rotate: -5,
        },
        [SNOWGLOBE_ENRAGED_SOBBING]: {
            yIndex: 0,
            xPosition: 9,
            zOffset: 6.1,
            rotate: 10,
        },
    },
    [FIXTURE]: {
        [TETHERBALL_POLE]: {
            yIndex: 3,
        },
    },
    [PANEL]: {
        [SNOWGLOBE_PAST]: {
            yIndex: 5,
            xPosition: 7,
            scaleFactor: 0.95,
        },
    },
}
