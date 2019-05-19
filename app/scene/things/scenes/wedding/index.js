import {
    BACKDROPS,
    CUTOUTS,
    FLATS,
    PANELS,
    PUPPETS
} from 'constants/scene'
import { WEDDING_BACKDROP } from '../../keys/backdrops'
import { WEDDING_CROWD } from '../../keys/cutouts'
import { FOREBODING_TREES } from '../../keys/flats'
import { WEDDING_PLATFORM } from '../../keys/panels'
import { PUPPET_KHARI_LIZ } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [WEDDING_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [WEDDING_CROWD]: {
            yIndex: 3,
            arrangement: {
                xFloat: 5,
                xWidth: 3,
                zHeight: 1
            }
        }
    },
    [FLATS]: {
        [FOREBODING_TREES]: {
            yIndex: 2,
            arrangement: {
                xFloat: 9,
                xWidth: 3,
                zHeight: 2
            }
        }
    },
    [PANELS]: {
        [WEDDING_PLATFORM]: {
            yIndex: 5,
            arrangement: {
                xFloat: 1.5,
                xWidth: 3.5,
                zHeight: 3
            }
        }
    },
    [PUPPETS]: {
        [PUPPET_KHARI_LIZ]: {
            yIndex: 1,
            arrangement: {
                xFloat: 1,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
