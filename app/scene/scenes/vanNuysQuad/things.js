import {
    BUBBLE,
    CARDBOARD,
    CUTOUT
} from 'constants/scene'
import { ESCAPE_POD_SKETCHBOOK } from 'constants/scene/things/bubbles'
import { VAN_NUYS_LOGO } from 'constants/scene/things/cardboards'
import {
    TRASH_CAN_QUAD,
    VAN_NUYS_PLANT_QUAD
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [ESCAPE_POD_SKETCHBOOK]: {
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
            arrangement: {
                xPosition: 7.5,
                xWidth: 3,
                zHeight: 3,
                zOffset: 2.5
            }
        }
    },
    [CUTOUT]: {
        [TRASH_CAN_QUAD]: {
            yIndex: 3,
            arrangement: {
                xPosition: 0.5,
                xWidth: 1.5,
                zHeight: 3
            }
        },
        [VAN_NUYS_PLANT_QUAD]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.33
        }
    }
}

export default ARRANGEMENTS_THINGS
