import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
} from '../../../../../src/constants/scene/things'
import { DREAM_STAIRS } from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_STAIRS,
    ODIN_STAIRS,
    PAINTING_EMPRESS__STAIRS,
    PAINTING_GODDESS__STAIRS,
} from '../../../../../src/constants/scene/things/cardboards'
import { BUDDHA_STATUE } from '../../../../../src/constants/scene/things/cutouts'
import { IRON_GATE_LOW, TAIWAN_GRATE_WINDOW, TAIWAN_WINDOW__STAIRS } from '../../../../../src/constants/scene/things/doors'

export default {
    [BACKDROP]: {
        [DREAM_STAIRS]: {
            yIndex: 2,
            xPosition: 3.45,
        },
    },
    [CARDBOARD]: {
        [BENNETT_STAIRS]: {
            yIndex: 2,
            xPosition: 2.5,
        },
        [ODIN_STAIRS]: {
            yIndex: 2,
            xPosition: 4.2,
            zOffset: 1,
        },
        [PAINTING_EMPRESS__STAIRS]: {
            yIndex: 3,
            xPosition: 10.73,
            zOffset: 1.56,
            perspective: 160,
            rotate: -15,
            rotateY: 278,
            skewX: -15,
            skewY: -5,
            layerYIndex: 5,
        },
        [PAINTING_GODDESS__STAIRS]: {
            yIndex: 3,
            xPosition: 8.75,
            zOffset: 1.5,
        },
    },
    [CUTOUT]: {
        [BUDDHA_STATUE]: {
            yIndex: 4,
            xPosition: 1.3,
        },
    },
    [DOOR]: {
        [IRON_GATE_LOW]: {
            yIndex: 1,
            xPosition: 1,
            zOffset: -3.33,
        },
        [TAIWAN_GRATE_WINDOW]: {
            yIndex: 2,
            xPosition: 3.54,
            zOffset: -0.05,
            layerYIndex: 1,
        },
        [TAIWAN_WINDOW__STAIRS]: {
            yIndex: 3,
            xPosition: 3.5,
            zOffset: 2.29,
        },
    },
}
