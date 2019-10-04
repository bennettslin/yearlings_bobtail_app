import {
    CARDBOARD,
    CUTOUT,
    DOOR
} from '../../../constants/scene'
import { CODE_BOX } from '../../../constants/scene/things/cardboards'
import { APARTMENT_PLANT } from '../../../constants/scene/things/cutouts'
import { BENNETT_GATE_FRONT } from '../../../constants/scene/things/doors'
import { BENNETT_GATE__SHARED } from '../../shared/home'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [CODE_BOX]: {
            yIndex: 2,
            xPosition: 5.5,
            zOffset: 2.5,
            scaleFactor: 0.275
        }
    },
    [CUTOUT]: {
        [APARTMENT_PLANT]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.35
        }
    },
    [DOOR]: {
        [BENNETT_GATE_FRONT]: {
            yIndex: 2,
            xPosition: 8,
            sharedStyle: BENNETT_GATE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
