import {
    BUBBLE,
    CARDBOARD,
    CUTOUT
} from '../../../constants/scene'
import {
    ESCAPE_POD_SKETCH,
    SKETCHBOOK__ESCAPE_POD
} from '../../../constants/scene/things/bubbles'
import { VAN_NUYS_LOGO } from '../../../constants/scene/things/cardboards'
import {
    TRASH_CAN__QUAD,
    VAN_NUYS_PLANT__QUAD
} from '../../../constants/scene/things/cutouts'
import {
    BANANA__SHARED,
    GARBAGE_BAG__SHARED,
    PAPER_BAG__SHARED
} from '../../shared/food'
import {
    BOOK__SHARED,
    SKETCHBOOK__SHARED
} from '../../shared/paper'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [ESCAPE_POD_SKETCH]: {
            yIndex: 5,
            xPosition: 2.75,
            zOffset: 3,
            noShadow: true,
            scaleFactor: 0.3
        },
        [SKETCHBOOK__ESCAPE_POD]: {
            yIndex: 5,
            xPosition: 2.75,
            zOffset: 2,
            rotate: 270,
            scaleFactor: 0.25,
            flipHorizontal: true,
            sharedStyle: [
                BOOK__SHARED,
                SKETCHBOOK__SHARED
            ]
        }
    },
    [CARDBOARD]: {
        [VAN_NUYS_LOGO]: {
            yIndex: 3,
            xPosition: 7.5,
            zOffset: 2.5,
            scaleFactor: 0.35
        }
    },
    [CUTOUT]: {
        [TRASH_CAN__QUAD]: {
            yIndex: 3,
            xPosition: 0.5,
            scaleFactor: 0.35,
            flipHorizontal: true,
            sharedStyle: [
                BANANA__SHARED,
                GARBAGE_BAG__SHARED,
                PAPER_BAG__SHARED
            ]
        },
        [VAN_NUYS_PLANT__QUAD]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.25
        }
    }
}

export default ARRANGEMENTS_THINGS
