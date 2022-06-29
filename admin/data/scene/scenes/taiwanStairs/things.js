import {
    CARDBOARD,
    CUTOUT,
    DOOR,
} from '../../../../../src/constants/scene/things'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
    PAINTING_EMPRESS__STAIRS,
    PAINTING_GODDESS__STAIRS,
} from '../../../../../src/constants/scene/things/cardboards'
import { BUDDHA_STATUE } from '../../../../../src/constants/scene/things/cutouts'
import { IRON_GATE_LOW, TAIWAN_WINDOW } from '../../../../../src/constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            xPosition: 3.75,
            zOffset: 1.2,
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 5.25,
        },
        [PAINTING_EMPRESS__STAIRS]: {
            yIndex: 4,
            xPosition: 10.6,
            zOffset: 1.56,
            perspective: 140,
            rotate: -15,
            rotateY: 278,
            skewX: -15,
            skewY: -5,
            layerYIndex: 5,
        },
        [PAINTING_GODDESS__STAIRS]: {
            yIndex: 4,
            xPosition: 8.5,
            zOffset: 1.5,
        },
    },
    [CUTOUT]: {
        [BUDDHA_STATUE]: {
            yIndex: 5,
            xPosition: 1.4,
        },
    },
    [DOOR]: {
        [IRON_GATE_LOW]: {
            yIndex: 1,
            xPosition: 3,
            zOffset: -3.33,
        },
        [TAIWAN_WINDOW]: {
            yIndex: 4,
            xPosition: 3.5,
            zOffset: 2.15,
        },
    },
}
