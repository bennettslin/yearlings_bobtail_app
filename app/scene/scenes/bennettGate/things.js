import {
    CARDBOARD,
    CUTOUT
} from '../../../constants/scene'
import { CODE_BOX } from '../../../constants/scene/things/cardboards'
import { APARTMENT_PLANT } from '../../../constants/scene/things/cutouts'

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
    }
}

export default ARRANGEMENTS_THINGS
