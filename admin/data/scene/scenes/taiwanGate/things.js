import {
    CARDBOARD,
    CUTOUT,
    DOOR,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { BENNETT_ODIN_RICKSHAW } from '../../../../../src/constants/scene/things/cardboards'
import {
    TAIWAN_SHRUB,
    TAIWAN_TREE,
} from '../../../../../src/constants/scene/things/cutouts'
import { IRON_GATE, TAIWAN_CIRCLE_WINDOW } from '../../../../../src/constants/scene/things/doors'
import {
    TAIWAN_HOUSES_CENTRE,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CARDBOARD]: {
        [BENNETT_ODIN_RICKSHAW]: {
            yIndex: 2,
            xPosition: 6.75,
            scaleFactor: 0.9,
        },
    },
    [CUTOUT]: {
        [TAIWAN_SHRUB]: {
            yIndex: 3,
            xPosition: 11.3,
        },
        [TAIWAN_TREE]: {
            yIndex: 1,
            xPosition: 4,
        },
    },
    [DOOR]: {
        [IRON_GATE]: {
            yIndex: 5,
            xPosition: 1.9,
        },
        [TAIWAN_CIRCLE_WINDOW]: {
            yIndex: 4,
            xPosition: 2,
        },
    },
    [FLAT]: {
        [TAIWAN_HOUSES_CENTRE]: {
            yIndex: 1,
            xPosition: 7,
        },
        [TAIWAN_HOUSE_FAR]: {
            yIndex: 1,
            xPosition: 10.25,
        },
        [TAIWAN_HOUSE_NEAR]: {
            yIndex: 2,
            xPosition: 11.25,
        },
    },
}
