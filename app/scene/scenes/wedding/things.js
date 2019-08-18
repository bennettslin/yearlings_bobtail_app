import {
    BACKDROP,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
} from '../../../constants/scene'
import { WEDDING_BACKDROP } from '../../../constants/scene/things/backdrops'
import { WEDDING_CROWD } from '../../../constants/scene/things/cutouts'
import {
    FOREBODING_TREES__NEAR,
    FOREBODING_TREES__MIDDLE,
    FOREBODING_TREES__FAR
} from '../../../constants/scene/things/flats'
import { WEDDING_PLATFORM } from '../../../constants/scene/things/panels'
import { PUPPET_KHARI_LIZ } from '../../../constants/scene/things/puppets'
import { PEOPLE_ALL_SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [WEDDING_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.66
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
        [FOREBODING_TREES__FAR]: {
            yIndex: 1,
            xPosition: 8.5,
            scaleFactor: 0.35
        },
        [FOREBODING_TREES__MIDDLE]: {
            yIndex: 2,
            xPosition: 9.5,
            scaleFactor: 0.5,
            flipHorizontal: true
        },
        [FOREBODING_TREES__NEAR]: {
            yIndex: 3,
            xPosition: 10.5,
            scaleFactor: 0.65
        }
    },
    [PANEL]: {
        [WEDDING_PLATFORM]: {
            yIndex: 3,
            xPosition: 1.3,
            scaleFactor: 0.5
        }
    },
    [PUPPET]: {
        [PUPPET_KHARI_LIZ]: {
            yIndex: 2,
            xPosition: 2,
            scaleFactor: 0.25,
            sharedStyle: PEOPLE_ALL_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
