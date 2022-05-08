import {
    CUTOUT,
    CARDBOARD,
    FIXTURE,
    PANEL,
    DOOR,
} from '../../../../../src/constants/scene/things'
import {
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS,
    PAINTING_CHINESE_GOD__MAT,
    PAINTING_CHINESE_GODDESS__MAT,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
} from '../../../../../src/constants/scene/things/cutouts'
import { TAIWAN_DOOR, TAIWAN_WINDOW_SIDE } from '../../../../../src/constants/scene/things/doors'
import { FRIDGE_DRAWINGS } from '../../../../../src/constants/scene/things/fixtures'
import { BUDDHA_STAND } from '../../../../../src/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 7.75,
        },
        [ODIN_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 1.5,
        },
        [PAINTING_CHINESE_GOD__MAT]: {
            yIndex: 2,
            xPosition: 1.5,
            zOffset: 2.5,
        },
        [PAINTING_CHINESE_GODDESS__MAT]: {
            yIndex: 1,
            xPosition: 1.5,
            zOffset: 2.5,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9,
        },
    },
    [CUTOUT]: {
        [BUDDHA_SHRINE]: {
            yIndex: 4,
        },
        [TAIWAN_FRIDGE]: {
            yIndex: 1,
            xPosition: 9.5,
        },
    },
    [DOOR]: {
        [TAIWAN_DOOR]: {
            yIndex: 3,
            xPosition: 8,
        },
        [TAIWAN_WINDOW_SIDE]: {
            yIndex: 4,
            xPosition: 1,
        },
    },
    [FIXTURE]: {
        [FRIDGE_DRAWINGS]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 1.25,
        },
    },
    [PANEL]: {
        [BUDDHA_STAND]: {
            yIndex: 4,
            zOffset: -1.54,
        },
    },
}
