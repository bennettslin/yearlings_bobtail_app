import {
    BUBBLE,
    CARDBOARD,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_RICKSHAW } from '../../../../../src/constants/scene/things/bubbles'
import {
    BENNETT_SHORE,
    ODIN_SHORE,
} from '../../../../../src/constants/scene/things/cardboards'
import { RICKSHAW_TOWN } from '../../../../../src/constants/scene/things/flats'

export default {
    [BUBBLE]: {
        [DREAM_RICKSHAW]: {
            yIndex: 5,
            xPosition: 5.5,
        },
    },
    [CARDBOARD]: {
        [BENNETT_SHORE]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.8,
        },
        [ODIN_SHORE]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.8,
        },
    },
    [FLAT]: {
        [RICKSHAW_TOWN]: {
            yIndex: 1,
            xPosition: 9.75,
        },
    },
}
