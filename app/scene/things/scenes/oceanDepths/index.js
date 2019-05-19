import {
    BACKDROPS,
    CUTOUTS,
    FLATS
} from 'constants/scene'
import { OCEAN_BOTTOM_FAR } from '../../keys/backdrops'
import { BENNETT_ODIN_OCEAN_FLOOR } from '../../keys/cutouts'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [OCEAN_BOTTOM_FAR]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [BENNETT_ODIN_OCEAN_FLOOR]: {
            yIndex: 4,
            arrangement: {
                xFloat: 8,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [FLATS]: {
        [OCEAN_BOTTOM_MIDDLE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 3
            }
        },
        [OCEAN_BOTTOM_NEAR]: {
            yIndex: 2,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
