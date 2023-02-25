import {
    BACKDROP,
    CARDBOARD,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { DREAM_BUOY } from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_ODIN_BUOY,
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
    [BACKDROP]: {
        [DREAM_BUOY]: {
            yIndex: 0,
            xPosition: 2.5,
            zOffset: 0.7,
        },
    },
    [CARDBOARD]: {
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1.4,
            zOffset: 1.4,
        },
        [BENNETT_ODIN_BUOY]: {
            yIndex: 0,
            xPosition: 2.6,
            zOffset: 2.8,
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 3.9,
            zOffset: 1.8,
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
