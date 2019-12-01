import {
    CUTOUT,
    DOOR
} from '../../../constants/scene/things'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT
} from '../../../constants/scene/things/cutouts'
import { EL_TORITO_DOORS } from '../../../constants/scene/things/doors'
import { DOOR__SHARED } from '../../shared/home'
import { NEWSPAPER__SHARED } from '../../shared/paper'
import { ALL_PEOPLE__SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [DISPENSER_LEFT]: {
            yIndex: 5,
            xPosition: 1,
            scaleFactor: 0.3,
            sharedStyle: NEWSPAPER__SHARED
        },
        [DISPENSER_RIGHT]: {
            yIndex: 5,
            xPosition: 10,
            scaleFactor: 0.3,
            sharedStyle: [
                NEWSPAPER__SHARED,
                ALL_PEOPLE__SHARED
            ]
        }
    },
    [DOOR]: {
        [EL_TORITO_DOORS]: {
            yIndex: 2,
            xPosition: 5.675,
            zOffset: -0.35,
            sharedStyle: DOOR__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
