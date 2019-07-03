import {
    BACKDROP,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
} from 'constants/scene'
import { WEDDING_BACKDROP } from 'constants/scene/things/backdrops'
import { WEDDING_CROWD } from 'constants/scene/things/cutouts'
import { FOREBODING_TREES } from 'constants/scene/things/flats'
import { WEDDING_PLATFORM } from 'constants/scene/things/panels'
import { PUPPET_KHARI_LIZ } from 'constants/scene/things/puppets'

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
            xPosition: 4.5,
            scaleFactor: 0.25
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
