import {
    BUBBLES,
    CUTOUTS
} from 'constants/scene'
import { ESCAPE_POD_SKETCHBOOK } from '../../keys/bubbles'
import {
    TRASH_CAN_QUAD,
    VAN_NUYS_PLANT_QUAD,
    VAN_NUYS_LOGO
} from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [BUBBLES]: {
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
    [CUTOUTS]: {
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
            arrangement: {
                xPosition: 3,
                scaleFactor: 2
            }
        },
        [VAN_NUYS_LOGO]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7.5,
                xWidth: 3,
                zHeight: 3,
                zOffset: 2.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
