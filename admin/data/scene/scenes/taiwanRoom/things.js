import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    DREAM_MAT_BENNETT,
    DREAM_MAT_ODIN,
} from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_MAT,
    ODIN_MAT,
    PAINTING_EMPRESS__MAT,
    PAINTING_GODDESS__MAT,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
} from '../../../../../src/constants/scene/things/cutouts'
import { TAIWAN_DOOR, TAIWAN_WINDOW__ROOM } from '../../../../../src/constants/scene/things/doors'
import { FRIDGE_DRAWINGS } from '../../../../../src/constants/scene/things/fixtures'
import { BUDDHA_STAND } from '../../../../../src/constants/scene/things/panels'

export default {
    [BACKDROP]: {
        [DREAM_MAT_BENNETT]: {
            yIndex: 2,
            xPosition: 7.8,
            zOffset: 0.03,
        },
        [DREAM_MAT_ODIN]: {
            yIndex: 3,
            xPosition: 1.9,
            zOffset: 0.05,
        },
    },
    [CARDBOARD]: {
        [BENNETT_MAT]: {
            yIndex: 2,
            xPosition: 7.9,
            zOffset: -0.03,
        },
        [ODIN_MAT]: {
            yIndex: 3,
            xPosition: 2,
            zOffset: -0.05,
        },
        [PAINTING_EMPRESS__MAT]: {
            yIndex: 1,
            xPosition: 2.25,
            zOffset: 1.5,
            scaleFactor: 1.05,
        },
        [PAINTING_GODDESS__MAT]: {
            yIndex: 1,
            xPosition: 0.39,
            zOffset: 1.55,
            perspective: 160,
            rotate: -15,
            rotateY: 85,
            skewX: -15,
            skewY: 37,
            scaleFactor: 1.05,
            layerYIndex: 2,
        },
    },
    [CUTOUT]: {
        [BUDDHA_SHRINE]: {
            yIndex: 4,
        },
        [TAIWAN_FRIDGE]: {
            yIndex: 1,
            xPosition: 8.3,
        },
    },
    [DOOR]: {
        [TAIWAN_WINDOW__ROOM]: {
            yIndex: 3,
            xPosition: 0.38,
            zOffset: -0.19,
            perspective: 160,
            rotate: -15,
            rotateY: 84,
            skewX: -15,
            skewY: 33,
            layerYIndex: 5,
        },
        [TAIWAN_DOOR]: {
            yIndex: 4,
            xPosition: 8.5,
        },
    },
    [FIXTURE]: {
        [FRIDGE_DRAWINGS]: {
            yIndex: 2,
            xPosition: 8.6,
            zOffset: 1.1,
        },
    },
    [PANEL]: {
        [BUDDHA_STAND]: {
            yIndex: 4,
            zOffset: -1.54,
        },
    },
}
