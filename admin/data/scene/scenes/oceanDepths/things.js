import {
    BACKDROP,
    CARDBOARD,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_DEPTHS } from '../../../../../src/constants/scene/things/backdrops'
import { BENNETT_ODIN_DEPTHS } from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [BACKDROP]: {
        [DREAM_DEPTHS]: {
            yIndex: 4,
            xPosition: 8,
            zOffset: 0.05,
            scaleFactor: 0.8,
        },
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 4,
            xPosition: 8,
            zOffset: -0.05,
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
