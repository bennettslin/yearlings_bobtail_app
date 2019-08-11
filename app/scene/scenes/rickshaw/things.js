import {
    BACKDROP,
    CARDBOARD,
    FLAT
} from '../../../constants/scene'
import { SHORE_RICKSHAW_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_SHORE,
    ODIN_SHORE
} from '../../../constants/scene/things/cardboards'
import { RICKSHAW_TOWN } from '../../../constants/scene/things/flats'
import {
    BENNETT_ODIN_SHARED,
    TAIWAN_HOUSE_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SHORE_RICKSHAW_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CARDBOARD]: {
        [BENNETT_SHORE]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.2,
            sharedStyle: BENNETT_ODIN_SHARED
        },
        [ODIN_SHORE]: {
            yIndex: 2,
            xPosition: 2,
            scaleFactor: 0.2,
            sharedStyle: BENNETT_ODIN_SHARED
        }
    },
    [FLAT]: {
        [RICKSHAW_TOWN]: {
            yIndex: 1,
            xPosition: 9.5,
            scaleFactor: 0.6,
            sharedStyle: TAIWAN_HOUSE_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
