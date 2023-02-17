import {
    BACKDROP,
    CARDBOARD,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_RICKSHAW } from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_RICKSHAW,
    ODIN_RICKSHAW,
} from '../../../../../src/constants/scene/things/cardboards'
import { RICKSHAW_TOWN } from '../../../../../src/constants/scene/things/flats'

export default {
    [BACKDROP]: {
        [DREAM_RICKSHAW]: {
            yIndex: 2,
            xPosition: 1.3,
            zOffset: 0.03,
        },
    },
    [CARDBOARD]: {
        [BENNETT_RICKSHAW]: {
            yIndex: 2,
            xPosition: 1.5,
            zOffset: -0.03,
        },
        [ODIN_RICKSHAW]: {
            yIndex: 2,
            xPosition: 0.75,
            zOffset: -0.03,
        },
    },
    [FLAT]: {
        [RICKSHAW_TOWN]: {
            yIndex: 1,
            xPosition: 9.75,
        },
    },
}
