import {
    BUBBLE,
    CARDBOARD,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { DREAM_BUOY } from '../../../../../src/constants/scene/things/bubbles'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_WAVES__REAR,
    OCEAN_WAVES__MIDDLE_REAR,
    OCEAN_WAVES__MIDDLE,
    OCEAN_WAVES__MIDDLE_FRONT,
    OCEAN_WAVES__FRONT,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [DREAM_BUOY]: {
            yIndex: 5,
            xPosition: 5.5,
        },
    },
    [CARDBOARD]: {
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1,
            zOffset: 0.5,
        },
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 2.5,
            scaleFactor: 0.7,
            zOffset: 2.5,
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 4,
            zOffset: 1,
        },
    },
    [PANEL]: {
        [OCEAN_WAVES__REAR]: {
            yIndex: 0,
            scaleFactor: 0.83,
            trimBottom: 0.09,
        },
        [OCEAN_WAVES__MIDDLE_REAR]: {
            yIndex: 1,
            rotate: 180,
            scaleFactor: 0.88,
            trimBottom: 0.04,
        },
        [OCEAN_WAVES__MIDDLE]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.92,
            trimBottom: 0.15,
        },
        [OCEAN_WAVES__MIDDLE_FRONT]: {
            yIndex: 3,
            rotate: 180,
            scaleFactor: 0.96,
        },
        [OCEAN_WAVES__FRONT]: {
            yIndex: 4,
            xPosition: 6,
            trimBottom: 0.11,
        },
    },
}
