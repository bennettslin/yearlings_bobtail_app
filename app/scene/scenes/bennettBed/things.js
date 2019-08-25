import {
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL
} from '../../../constants/scene'
import {
    BLINDS_OUTSIDE__NEIGHBOUR,
    NEIGHBOUR_DOOR,
    BLINDS_INSIDE_OPEN__BENNETT,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN
} from '../../../constants/scene/things/doors'
import {
    NUDE_DRAWINGS,
    VASELINE
} from '../../../constants/scene/things/fixtures'
import { BENNETT_PILLOW } from '../../../constants/scene/things/furniture'
import { BENNETT_BED } from '../../../constants/scene/things/panels'
import {
    DOOR__SHARED,
    WINDOW__SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BLINDS_OUTSIDE__NEIGHBOUR]: {
            yIndex: 1,
            xPosition: 6.5,
            zOffset: 2,
            scaleFactor: 0.5,
            sharedStyle: WINDOW__SHARED
        },
        [NEIGHBOUR_DOOR]: {
            yIndex: 1,
            xPosition: 2.5,
            scaleFactor: 0.63,
            sharedStyle: DOOR__SHARED
        },
        [BLINDS_INSIDE_OPEN__BENNETT]: {
            yIndex: 3,
            xPosition: 7.5,
            zOffset: 1,
            scaleFactor: 0.575,
            sharedStyle: WINDOW__SHARED
        },
        [BENNETT_DOOR_INSIDE]: {
            yIndex: 3,
            xPosition: 3,
            sharedStyle: DOOR__SHARED
        },
        [BENNETT_DOOR_INSIDE_OPEN]: {
            yIndex: 3,
            xPosition: 3,
            sharedStyle: DOOR__SHARED
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
            xPosition: 8
        }
    },
    [FURNITURE]: {
        [BENNETT_PILLOW]: {
            yIndex: 4,
            xPosition: 9.5
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
