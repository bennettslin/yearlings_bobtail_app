import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { SHORE_BUOY_BACKDROP } from 'constants/scene/things/backdrops'
import {
    BENNETT_ODIN_BUOY,
    YELLOW_TAPED_GRILL
} from 'constants/scene/things/cutouts'
import { SHORE_CARNIVAL } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SHORE_BUOY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [BENNETT_ODIN_BUOY]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 0.5,
                zHeight: 2
            }
        },
        [YELLOW_TAPED_GRILL]: {
            yIndex: 4,
            arrangement: {
                xPosition: 7,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [FLAT]: {
        [SHORE_CARNIVAL]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
