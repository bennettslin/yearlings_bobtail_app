import {
    BACKDROP,
    CARDBOARD,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_DEPTHS } from '../../../../../src/constants/scene/things/backdrops'
import { BENNETT_ODIN_DEPTHS } from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_DEPTHS_CAVES_LEFT,
    OCEAN_DEPTHS_CAVES_RIGHT,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [BACKDROP]: {
        [DREAM_DEPTHS]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: 0.15,
        },
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 4,
            xPosition: 7.5,
        },
    },
    [FLAT]: {
        [OCEAN_DEPTHS_CAVES_LEFT]: {
            yIndex: 1,
        },
        [OCEAN_DEPTHS_CAVES_RIGHT]: {
            yIndex: 2,
        },
    },
}
