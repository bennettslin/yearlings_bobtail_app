import {
    BUBBLES,
    CUTOUTS
} from 'constants/scene'
import { ESCAPE_POD_SKETCHBOOK } from '../../keys/bubbles'
import {
    VAN_NUYS_PLANT_QUAD,
    VAN_NUYS_LOGO
} from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [BUBBLES]: {
        [ESCAPE_POD_SKETCHBOOK]: {
            yIndex: 5,
            arrangement: {
                xFloat: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 3
            }
        }
    },
    [CUTOUTS]: {
        [VAN_NUYS_PLANT_QUAD]: {
            yIndex: 4,
            arrangement: {
                xFloat: 3,
                xWidth: 2,
                zHeight: 1.5
            }
        },
        [VAN_NUYS_LOGO]: {
            yIndex: 3,
            arrangement: {
                xFloat: 7.5,
                xWidth: 3,
                zHeight: 3,
                zOffset: 2.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
