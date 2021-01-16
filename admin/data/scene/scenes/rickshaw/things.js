import {
    CARDBOARD,
    FLAT,
} from '../../../../../app/constants/scene/things'
import {
    BENNETT_SHORE,
    ODIN_SHORE,
} from '../../../../../app/constants/scene/things/cardboards'
import { RICKSHAW_TOWN } from '../../../../../app/constants/scene/things/flats'

export default {
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
