import {
    CUTOUT,
    DOOR
} from '../../../constants/scene'
import { RECYCLABLES } from '../../../constants/scene/things/cutouts'
import {
    BLINDS_OUTSIDE__BENNETT,
    BENNETT_DOOR_OUTSIDE
} from '../../../constants/scene/things/doors'
import {
    DOOR_SHARED,
    WINDOW_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [RECYCLABLES]: {
            yIndex: 2,
            xPosition: 3.5,
            scaleFactor: 0.33
        }
    },
    [DOOR]: {
        [BLINDS_OUTSIDE__BENNETT]: {
            yIndex: 2,
            xPosition: 3.5,
            zOffset: 2.5,
            scaleFactor: 0.575,
            sharedStyle: WINDOW_SHARED
        },
        [BENNETT_DOOR_OUTSIDE]: {
            yIndex: 2,
            xPosition: 8,
            sharedStyle: DOOR_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
