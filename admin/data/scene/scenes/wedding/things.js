import {
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET,
} from '../../../../../app/constants/scene/things'
import {
    WEDDING_CHAIR,
    WEDDING_CROWD,
} from '../../../../../app/constants/scene/things/cutouts'
import {
    FOREBODING_TREES__FAR,
    FOREBODING_TREES__MIDDLE,
    FOREBODING_TREES__NEAR,
} from '../../../../../app/constants/scene/things/flats'
import {
    WEDDING_PLATFORM_FRONT,
    WEDDING_PLATFORM_REAR,
} from '../../../../../app/constants/scene/things/panels'
import { PUPPET_KHARI_LIZ } from '../../../../../app/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [WEDDING_CHAIR]: {
            yIndex: 3,
            xPosition: 0.65,
            zOffset: -0.03,
        },
        [WEDDING_CROWD]: {
            yIndex: 3,
            xPosition: 4.5,
            zOffset: -0.1,
            layerYIndex: 5,
        },
    },
    [FLAT]: {
        [FOREBODING_TREES__FAR]: {
            yIndex: 1,
            xPosition: 8.5,
            scaleFactor: 0.54,
        },
        [FOREBODING_TREES__MIDDLE]: {
            yIndex: 2,
            xPosition: 9.75,
            scaleFactor: 0.77,
            flipHorizontal: true,
        },
        [FOREBODING_TREES__NEAR]: {
            yIndex: 3,
            xPosition: 10.5,
        },
    },
    [PANEL]: {
        [WEDDING_PLATFORM_FRONT]: {
            yIndex: 3,
            xPosition: 1.4,
            zOffset: -0.12,
            layerYIndex: 4,
        },
        [WEDDING_PLATFORM_REAR]: {
            yIndex: 2,
            xPosition: 1.6,
            zOffset: 0.05,
        },
    },
    [PUPPET]: {
        [PUPPET_KHARI_LIZ]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: -0.07,
            layerYIndex: 3,
        },
    },
}
