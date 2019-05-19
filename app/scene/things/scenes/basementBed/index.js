import {
    CUTOUTS,
    FIXTURES
} from 'constants/scene'
import { ELLIOTT_SMITH_POSTER } from '../../keys/cutouts'
import {
    NAS_ALBUM,
    BENNETT_RECORD_PLAYER_BASEMENT,
    CRACKED_PICTURE
} from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
        }
    },
    [FIXTURES]: {
        [NAS_ALBUM]: {
            yIndex: 3,
            arrangement: {
                xFloat: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        },
        [BENNETT_RECORD_PLAYER_BASEMENT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 3.5,
                xWidth: 2,
                zHeight: 2
            }
        },
        [CRACKED_PICTURE]: {
            yIndex: 3,
            arrangement: {
                xFloat: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
