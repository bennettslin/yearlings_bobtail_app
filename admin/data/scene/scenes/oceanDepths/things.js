import {
    CARDBOARD,
    FLAT,
} from '../../../../../app/constants/scene/things'
import { BENNETT_ODIN_OCEAN_FLOOR } from '../../../../../app/constants/scene/things/cardboards'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR,
} from '../../../../../app/constants/scene/things/flats'

export default {
    [CARDBOARD]: {
        [BENNETT_ODIN_OCEAN_FLOOR]: {
            yIndex: 4,
            xPosition: 8,
            scaleFactor: 0.2,
        },
    },
    [FLAT]: {
        [OCEAN_BOTTOM_MIDDLE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.65,
        },
        [OCEAN_BOTTOM_NEAR]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.5,
        },
    },
}
