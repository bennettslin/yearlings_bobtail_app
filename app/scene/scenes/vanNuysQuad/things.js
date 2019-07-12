import {
    BUBBLE,
    CARDBOARD,
    CUTOUT
} from 'constants/scene'
import {
    ESCAPE_POD_SKETCH,
    SKETCHBOOK__ESCAPE_POD
} from 'constants/scene/things/bubbles'
import { VAN_NUYS_LOGO } from 'constants/scene/things/cardboards'
import {
    TRASH_CAN__QUAD,
    VAN_NUYS_PLANT__QUAD
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [ESCAPE_POD_SKETCH]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 3
            }
        },
        [SKETCHBOOK__ESCAPE_POD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 3
            }
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
            arrangement: {
                xPosition: 0.5,
                xWidth: 1.5,
                zHeight: 3
            }
        },
        [VAN_NUYS_PLANT__QUAD]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.33
        }
    }
}

export default ARRANGEMENTS_THINGS
