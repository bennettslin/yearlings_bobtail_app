import {
    BACKDROPS,
    CUTOUTS,
    FLATS
} from 'constants/scene'
import { SHORE_BUOY_BACKDROP } from '../../keys/backdrops'
import {
    BENNETT_ODIN_BUOY,
    YELLOW_TAPED_GRILL
} from '../../keys/cutouts'
import { SHORE_CARNIVAL } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [SHORE_BUOY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [BENNETT_ODIN_BUOY]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
                xWidth: 0.5,
                zHeight: 2
            }
        },
        [YELLOW_TAPED_GRILL]: {
            yIndex: 4,
            arrangement: {
                xFloat: 7,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [FLATS]: {
        [SHORE_CARNIVAL]: {
            yIndex: 1,
            arrangement: {
                xFloat: 2,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
