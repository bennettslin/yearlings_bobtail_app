import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { SHORE_RICKSHAW_BACKDROP } from 'constants/scene/things/backdrops'
import {
    BENNETT_SHORE,
    ODIN_SHORE
} from 'constants/scene/things/cutouts'
import { RICKSHAW_TOWN } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SHORE_RICKSHAW_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [BENNETT_SHORE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 1.5,
                xWidth: 0.5,
                zHeight: 2
            }
        },
        [ODIN_SHORE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [FLAT]: {
        [RICKSHAW_TOWN]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
