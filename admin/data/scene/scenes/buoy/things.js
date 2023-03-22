import {
    BACKDROP,
    CARDBOARD,
} from '../../../../../src/constants/scene/things'
import {
    DREAM_BUOY,
    OCEAN_WAVES__FRONT,
    OCEAN_WAVES__REAR,
} from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_ODIN_BUOY,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
} from '../../../../../src/constants/scene/things/cardboards'

export default {
    [BACKDROP]: {
        [DREAM_BUOY]: {
            yIndex: 0,
            xPosition: 2.5,
            zOffset: 0.7,
            layerYIndex: 5,
        },
        [OCEAN_WAVES__REAR]: {
            yIndex: 5,
            xPosition: 5,
            trimBottom: 0.09,
            layerYIndex: 4,
        },
        [OCEAN_WAVES__FRONT]: {
            yIndex: 5,
            xPosition: 6,
            trimBottom: 0.11,
        },
    },
    [CARDBOARD]: {
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1.4,
            zOffset: 1.4,
            layerYIndex: 5,
        },
        [BENNETT_ODIN_BUOY]: {
            yIndex: 0,
            xPosition: 2.6,
            zOffset: 2.9,
            layerYIndex: 5,
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 3.8,
            zOffset: 1.8,
            layerYIndex: 5,
        },
    },
}
