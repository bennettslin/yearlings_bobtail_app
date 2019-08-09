import {
    CUTOUT,
    DOOR
} from 'constants/scene'
import { RECYCLABLES } from 'constants/scene/things/cutouts'
import { BENNETT_DOOR_OUTSIDE } from 'constants/scene/things/doors'
import { DOOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [RECYCLABLES]: {
            yIndex: 2,
            xPosition: 3.5,
            scaleFactor: 0.33
        }
    },
    [DOOR]: {
        [BENNETT_DOOR_OUTSIDE]: {
            yIndex: 2,
            xPosition: 8,
            scaleFactor: 0.7,
            sharedStyle: DOOR_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
