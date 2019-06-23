import {
    BACKDROP,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
} from 'constants/scene'
import { WEDDING_BACKDROP } from '../../keys/backdrops'
import { WEDDING_CROWD } from '../../keys/cutouts'
import { FOREBODING_TREES } from '../../keys/flats'
import { WEDDING_PLATFORM } from '../../keys/panels'
import { PUPPET_KHARI_LIZ } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [WEDDING_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [WEDDING_CROWD]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5,
                xWidth: 3,
                zHeight: 1
            }
        }
    },
    [FLAT]: {
        [FOREBODING_TREES]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 3,
                zHeight: 2
            }
        }
    },
    [PANEL]: {
        [WEDDING_PLATFORM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 1.5,
                xWidth: 3.5,
                zHeight: 3
            }
        }
    },
    [PUPPET]: {
        [PUPPET_KHARI_LIZ]: {
            yIndex: 1,
            arrangement: {
                xPosition: 1,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
