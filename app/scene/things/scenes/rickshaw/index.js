import {
    BACKDROPS,
    CUTOUTS,
    FLATS
} from 'constants/scene'
import { SHORE_RICKSHAW_BACKDROP } from '../../keys/backdrops'
import {
    BENNETT_SHORE,
    ODIN_SHORE
} from '../../keys/cutouts'
import { RICKSHAW_TOWN } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [SHORE_RICKSHAW_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
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
    [FLATS]: {
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
