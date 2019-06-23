import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { OCEAN_BOTTOM_FAR } from '../../keys/backdrops'
import { BENNETT_ODIN_OCEAN_FLOOR } from '../../keys/cutouts'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OCEAN_BOTTOM_FAR]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [BENNETT_ODIN_OCEAN_FLOOR]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [FLAT]: {
        [OCEAN_BOTTOM_MIDDLE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 3
            }
        },
        [OCEAN_BOTTOM_NEAR]: {
            yIndex: 2,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
