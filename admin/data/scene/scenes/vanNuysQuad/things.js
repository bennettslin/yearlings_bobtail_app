import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
} from '../../../../../app/constants/scene/things'
import {
    SKETCH_ESCAPE_POD,
    SKETCHBOOK__ESCAPE_POD,
} from '../../../../../app/constants/scene/things/bubbles'
import { VAN_NUYS_PAINTING } from '../../../../../app/constants/scene/things/cardboards'
import {
    TRASH_CAN__QUAD,
    BUSH_SINGLE__QUAD,
    BUSH_DOUBLE__QUAD,
} from '../../../../../app/constants/scene/things/cutouts'
import { SKETCH_CONFIG } from '../../sharedConfigs'

export default {
    [BUBBLE]: {
        [SKETCHBOOK__ESCAPE_POD]: {
            yIndex: 5,
            xPosition: 2.75,
            zOffset: 2.5,
            rotate: 270,
        },
        [SKETCH_ESCAPE_POD]: {
            ...SKETCH_CONFIG,
            xPosition: 2.7,
            zOffset: 3.5,
        },
    },
    [CARDBOARD]: {
        [VAN_NUYS_PAINTING]: {
            yIndex: 3,
            xPosition: 7.5,
            zOffset: 3,
        },
    },
    [CUTOUT]: {
        [TRASH_CAN__QUAD]: {
            yIndex: 3,
            xPosition: 0.5,
            flipHorizontal: true,
        },
        [BUSH_DOUBLE__QUAD]: {
            yIndex: 4,
            xPosition: 3.5,
            scaleFactor: 0.25,
        },
        [BUSH_SINGLE__QUAD]: {
            yIndex: 4,
            xPosition: 10.5,
            scaleFactor: 0.25,
        },
    },
}
