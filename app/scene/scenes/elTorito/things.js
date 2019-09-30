import { CUTOUT } from '../../../constants/scene'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT
} from '../../../constants/scene/things/cutouts'
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
    }
}

export default ARRANGEMENTS_THINGS
