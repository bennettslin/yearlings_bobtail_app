import {
    BACKDROP,
    CARDBOARD,
    FLAT
} from '../../../constants/scene/things'
import { SHORE_RICKSHAW_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_SHORE,
    ODIN_SHORE
} from '../../../constants/scene/things/cardboards'
import { RICKSHAW_TOWN } from '../../../constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SHORE_RICKSHAW_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CARDBOARD]: {
        [BENNETT_SHORE]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.2
        },
        [ODIN_SHORE]: {
            yIndex: 2,
            xPosition: 2,
            scaleFactor: 0.2
        }
    },
    [FLAT]: {
        [RICKSHAW_TOWN]: {
            yIndex: 1,
            xPosition: 9.5,
            scaleFactor: 0.6
        }
    }
}

export default ARRANGEMENTS_THINGS
