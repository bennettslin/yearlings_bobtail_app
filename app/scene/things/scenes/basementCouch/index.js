import {
    CUTOUTS,
    FIXTURES,
    PANELS
} from 'constants/scene'
import { ELLIOTT_SMITH_POSTER } from '../../keys/cutouts'
import {
    NAS_ALBUM,
    BENNETT_RECORD_PLAYER_BASEMENT
} from '../../keys/fixtures'
import {
    BENNETT_COUCH_BASEMENT,
    BENNETT_LEFT_ARMREST_BASEMENT,
    BENNETT_RIGHT_ARMREST_BASEMENT
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
        }
    },
    [FIXTURES]: {
        [BENNETT_RECORD_PLAYER_BASEMENT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 3.5,
                xWidth: 2,
                zHeight: 2
            }
        },
        [NAS_ALBUM]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        }
    },
    [PANELS]: {
        [BENNETT_COUCH_BASEMENT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_LEFT_ARMREST_BASEMENT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        },
        [BENNETT_RIGHT_ARMREST_BASEMENT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 6,
                zHeight: 5.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
