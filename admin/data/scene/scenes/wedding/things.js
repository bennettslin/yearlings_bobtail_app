import {
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
} from '../../../../../app/constants/scene/things'
import { WEDDING_CROWD } from '../../../../../app/constants/scene/things/cutouts'
import {
    FOREBODING_TREES__NEAR,
    FOREBODING_TREES__MIDDLE,
    FOREBODING_TREES__FAR
} from '../../../../../app/constants/scene/things/flats'
import { WEDDING_PLATFORM } from '../../../../../app/constants/scene/things/panels'
import { PUPPET_KHARI_LIZ } from '../../../../../app/constants/scene/things/puppets'

export default {
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
            xPosition: 9.75,
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
            zOffset: -0.09,
            scaleFactor: 0.5,
            layerYIndex: 4
        }
    },
    [PUPPET]: {
        [PUPPET_KHARI_LIZ]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: -0.07,
            scaleFactor: 0.25,
            layerYIndex: 3
        }
    }
}
