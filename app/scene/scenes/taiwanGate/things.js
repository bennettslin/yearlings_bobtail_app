import {
    CARDBOARD,
    CUTOUT,
    DOOR,
    FLAT
} from '../../../constants/scene/things'
import { BENNETT_ODIN_RICKSHAW } from '../../../constants/scene/things/cardboards'
import { TAIWAN_TREE } from '../../../constants/scene/things/cutouts'
import { IRON_GATE } from '../../../constants/scene/things/doors'
import {
    TAIWAN_HOUSES_CENTRE,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR
} from '../../../constants/scene/things/flats'

export default {
    [CARDBOARD]: {
        [BENNETT_ODIN_RICKSHAW]: {
            yIndex: 2,
            xPosition: 7,
            scaleFactor: 0.2
        }
    },
    [CUTOUT]: {
        [TAIWAN_TREE]: {
            yIndex: 1,
            xPosition: 4,
            scaleFactor: 0.6
        }
    },
    [DOOR]: {
        [IRON_GATE]: {
            yIndex: 5,
            xPosition: 2
        }
    },
    [FLAT]: {
        [TAIWAN_HOUSES_CENTRE]: {
            yIndex: 1,
            xPosition: 7,
            scaleFactor: 0.45
        },
        [TAIWAN_HOUSE_FAR]: {
            yIndex: 1,
            xPosition: 10.25,
            scaleFactor: 0.45
        },
        [TAIWAN_HOUSE_NEAR]: {
            yIndex: 2,
            xPosition: 11.25,
            scaleFactor: 0.5
        }
    }
}
