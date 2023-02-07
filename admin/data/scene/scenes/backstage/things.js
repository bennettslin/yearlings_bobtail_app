import {
    CUTOUT,
    FIXTURE,
    FLAT,
} from '../../../../../src/constants/scene/things'
import {
    SANDBAGS,
    STAGE_CUTOUT,
} from '../../../../../src/constants/scene/things/cutouts'
import { MANNEQUIN } from '../../../../../src/constants/scene/things/fixtures'
import {
    CURTAIN_LEG_FLAT__BACK_LEFT,
    CURTAIN_LEG_FLAT__BACK_RIGHT,
    CURTAIN_LEG_FLAT__FRONT_LEFT,
    CURTAIN_LEG_FLAT__FRONT_RIGHT,
    CURTAIN_SIDE_FLAT__LEFT,
    CURTAIN_SIDE_FLAT__RIGHT,
    CURTAIN_TOP_FLAT,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [SANDBAGS]: {
            yIndex: 1,
            xPosition: 2.8,
        },
        [STAGE_CUTOUT]: {
            yIndex: 5,
            xPosition: 10,
        },
    },
    [FIXTURE]: {
        [MANNEQUIN]: {
            yIndex: 5,
            xPosition: 0.5,
        },
    },
    [FLAT]: {
        [CURTAIN_LEG_FLAT__BACK_LEFT]: {
            yIndex: 4,
            xPosition: 0,
        },
        [CURTAIN_LEG_FLAT__BACK_RIGHT]: {
            yIndex: 4,
            xPosition: 11,
        },
        [CURTAIN_LEG_FLAT__FRONT_LEFT]: {
            yIndex: 2,
            xPosition: 0,
        },
        [CURTAIN_LEG_FLAT__FRONT_RIGHT]: {
            yIndex: 2,
            xPosition: 11,
        },
        [CURTAIN_SIDE_FLAT__LEFT]: {
            yIndex: 0,
            xPosition: 0,
        },
        [CURTAIN_SIDE_FLAT__RIGHT]: {
            yIndex: 0,
            xPosition: 11,
        },
        [CURTAIN_TOP_FLAT]: {
            yIndex: 0,
            zOffset: 7,
            layerYIndex: -1,
        },
    },
}
