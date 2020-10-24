import {
    CARDBOARD,
    PANEL
} from '../../../../../app/constants/scene/things'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT
} from '../../../../../app/constants/scene/things/cardboards'
import {
    OCEAN_WAVES__REAR,
    OCEAN_WAVES__MIDDLE_REAR,
    OCEAN_WAVES__MIDDLE,
    OCEAN_WAVES__MIDDLE_FRONT,
    OCEAN_WAVES__FRONT
} from '../../../../../app/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1,
            zOffset: 0.5,
            scaleFactor: 0.2
        },
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 2.5,
            scaleFactor: 0.175,
            zOffset: 2.5
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 4,
            zOffset: 1,
            scaleFactor: 0.2
        }
    },
    [PANEL]: {
        [OCEAN_WAVES__REAR]: {
            yIndex: 0,
            xPosition: 5.5,
            trimBottom: 0.1
        },
        [OCEAN_WAVES__MIDDLE_REAR]: {
            yIndex: 1,
            xPosition: 5.5,
            rotate: 180,
            scaleFactor: 1.05,
            trimBottom: 0.05
        },
        [OCEAN_WAVES__MIDDLE]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 1.1,
            trimBottom: 0.16
        },
        [OCEAN_WAVES__MIDDLE_FRONT]: {
            yIndex: 3,
            xPosition: 5.5,
            rotate: 180,
            scaleFactor: 1.15,
            trimBottom: 0.01
        },
        [OCEAN_WAVES__FRONT]: {
            yIndex: 4,
            xPosition: 6,
            scaleFactor: 1.2,
            trimBottom: 0.12
        }
    }
}
