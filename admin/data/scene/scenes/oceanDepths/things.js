import {
    CARDBOARD,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { BENNETT_ODIN_OCEAN_FLOOR } from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CARDBOARD]: {
        [BENNETT_ODIN_OCEAN_FLOOR]: {
            yIndex: 4,
            xPosition: 8,
            scaleFactor: 0.8,
        },
    },
    [FLAT]: {
        [OCEAN_BOTTOM_MIDDLE]: {
            yIndex: 1,
        },
        [OCEAN_BOTTOM_NEAR]: {
            yIndex: 2,
        },
    },
}
