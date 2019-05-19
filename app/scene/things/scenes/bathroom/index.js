import {
    CUTOUTS,
    FIXTURES,
    PANELS
} from 'constants/scene'
import {
    MIRRORED_SINK,
    TOWEL_RACK
} from '../../keys/cutouts'
import {
    RECORD_PLAYER_STOOL,
    JOHNNY_HORTON_ALBUM
} from '../../keys/fixtures'
import { BATHTUB } from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [MIRRORED_SINK]: {
            yIndex: 1,
            arrangement: {
                xFloat: 8,
                xWidth: 2,
                zHeight: 3
            }
        },
        [TOWEL_RACK]: {
            yIndex: 1,
            arrangement: {
                xFloat: 4,
                xWidth: 2,
                zHeight: 2,
                zOffset: 3
            }
        }
    },
    [FIXTURES]: {
        [RECORD_PLAYER_STOOL]: {
            yIndex: 5,
            arrangement: {
                xFloat: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        },
        [JOHNNY_HORTON_ALBUM]: {
            yIndex: 5,
            arrangement: {
                xFloat: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
        [BATHTUB]: {
            yIndex: 4,
            arrangement: {
                xFloat: 4.5,
                xWidth: 5,
                zHeight: 1.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
