import {
    BUBBLE,
    CARDBOARD,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { DREAM_RICKSHAW } from '../../../../../src/constants/scene/things/bubbles'
import {
    BENNETT_RICKSHAW,
    ODIN_RICKSHAW,
} from '../../../../../src/constants/scene/things/cardboards'
import { RICKSHAW_TOWN } from '../../../../../src/constants/scene/things/flats'

export default {
    [BUBBLE]: {
        [DREAM_RICKSHAW]: {
            yIndex: 2,
            xPosition: 1.5,
            zOffset: 0.05,
            scaleFactor: 0.8,
        },
    },
    [CARDBOARD]: {
        [BENNETT_RICKSHAW]: {
            yIndex: 2,
            xPosition: 1.5,
            zOffset: -0.05,
            scaleFactor: 0.8,
        },
        [ODIN_RICKSHAW]: {
            yIndex: 2,
            xPosition: 1,
            zOffset: -0.05,
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
