import {
    CARDBOARD,
    CUTOUT,
    DOOR,
} from '../../../../../src/constants/scene/things'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
    PAINTING_FUXI__STAIRS,
    PAINTING_NUWA__STAIRS,
} from '../../../../../src/constants/scene/things/cardboards'
import { BUDDHA_STATUE } from '../../../../../src/constants/scene/things/cutouts'
import { IRON_GATE_LOW } from '../../../../../src/constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            xPosition: 4.75,
            zOffset: 0.8,
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 6.25,
        },
        [PAINTING_FUXI__STAIRS]: {
            yIndex: 4,
            xPosition: 8.5,
            zOffset: 2.5,
        },
        [PAINTING_NUWA__STAIRS]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: 2.5,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9,
        },
    },
    [CUTOUT]: {
        [BUDDHA_STATUE]: {
            yIndex: 4,
            xPosition: 2,
        },
    },
    [DOOR]: {
        [IRON_GATE_LOW]: {
            yIndex: 1,
            xPosition: 4,
            zOffset: -2.83,
        },
    },
}
