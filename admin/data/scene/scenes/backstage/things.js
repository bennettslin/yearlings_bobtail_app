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
    CURTAIN_LEG__BACK_LEFT,
    CURTAIN_LEG__BACK_RIGHT,
    CURTAIN_LEG__FRONT_LEFT,
    CURTAIN_LEG__FRONT_RIGHT,
    CURTAIN_SIDE__LEFT,
    CURTAIN_SIDE__RIGHT,
    CURTAIN_TOP,
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
            yIndex: 1,
            xPosition: 7.5,
        },
    },
    [FLAT]: {
        [CURTAIN_LEG__BACK_LEFT]: {
            yIndex: 5,
            xPosition: 0,
        },
        [CURTAIN_LEG__BACK_RIGHT]: {
            yIndex: 5,
            xPosition: 11,
        },
        [CURTAIN_LEG__FRONT_LEFT]: {
            yIndex: 3,
            xPosition: 0,
        },
        [CURTAIN_LEG__FRONT_RIGHT]: {
            yIndex: 3,
            xPosition: 11,
        },
        [CURTAIN_SIDE__LEFT]: {
            yIndex: 1,
            xPosition: 0,
        },
        [CURTAIN_SIDE__RIGHT]: {
            yIndex: 1,
            xPosition: 11,
        },
        [CURTAIN_TOP]: {
            yIndex: 1,
            zOffset: 7,
        },
    },
}
