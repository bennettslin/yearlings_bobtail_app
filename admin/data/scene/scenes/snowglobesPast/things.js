import {
    CARDBOARD,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    SNOWGLOBE_SMALL_PAST,
    SNOWGLOBE_ENRAGED_SOBBING,
} from '../../../../../src/constants/scene/things/cardboards'
import { TETHERBALL_POLE } from '../../../../../src/constants/scene/things/fixtures'
import { SNOWGLOBE_PAST_LEFT, SNOWGLOBE_PAST_RIGHT } from '../../../../../src/constants/scene/things/flats'
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
    [FLAT]: {
        [SNOWGLOBE_PAST_LEFT]: {
            yIndex: -1,
            xPosition: 0,
        },
        [SNOWGLOBE_PAST_RIGHT]: {
            yIndex: -1,
            xPosition: 10.5,
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
