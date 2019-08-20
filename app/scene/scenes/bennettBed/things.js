import {
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL
} from '../../../constants/scene'
import {
    NEIGHBOUR_DOOR,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN
} from '../../../constants/scene/things/doors'
import {
    NUDE_DRAWINGS,
    VASELINE
} from '../../../constants/scene/things/fixtures'
import { BENNETT_PILLOW } from '../../../constants/scene/things/furniture'
import { BENNETT_BED } from '../../../constants/scene/things/panels'
import { DOOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [NEIGHBOUR_DOOR]: {
            yIndex: 1,
            xPosition: 2.5,
            scaleFactor: 0.6,
            sharedStyle: DOOR_SHARED
        },
        [BENNETT_DOOR_INSIDE]: {
            yIndex: 3,
            xPosition: 3,
            scaleFactor: 0.7,
            sharedStyle: DOOR_SHARED
        },
        [BENNETT_DOOR_INSIDE_OPEN]: {
            yIndex: 3,
            xPosition: 3,
            scaleFactor: 0.7,
            sharedStyle: DOOR_SHARED
        }
    },
    [FIXTURE]: {
        [NUDE_DRAWINGS]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 0.5,
                zHeight: 0.5
            }
        },
        [VASELINE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [FURNITURE]: {
        [BENNETT_PILLOW]: {
            yIndex: 4,
            xPosition: 9,
            scaleFactor: 0.25
        }
    },
    [PANEL]: {
        [BENNETT_BED]: {
            yIndex: 5,
            xPosition: 7.5,
            scaleFactor: 0.25
        }
    }
}

export default ARRANGEMENTS_THINGS
