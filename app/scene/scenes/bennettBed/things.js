import {
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL
} from '../../../constants/scene/things'
import {
    BLINDS_OUTSIDE__NEIGHBOUR,
    NEIGHBOUR_DOOR,
    BLINDS_INSIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_GATE_SIDE_OPEN
} from '../../../constants/scene/things/doors'
import {
    LIGHT_SWITCH__OFF,
    LIGHT_SWITCH__ON,
    LINGERIE_DRAWING,
    VASELINE
} from '../../../constants/scene/things/fixtures'
import { BENNETT_PILLOW } from '../../../constants/scene/things/furnitures'
import { BENNETT_BED } from '../../../constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BLINDS_OUTSIDE__NEIGHBOUR]: {
            yIndex: 1,
            xPosition: 5,
            zOffset: 1.875,
            scaleFactor: 0.6
        },
        [NEIGHBOUR_DOOR]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.6
        },
        [BLINDS_INSIDE_OPEN]: {
            yIndex: 3,
            xPosition: 7.5,
            zOffset: 2.25
        },
        [BENNETT_DOOR_INSIDE]: {
            yIndex: 3,
            xPosition: 3
        },
        [BENNETT_DOOR_INSIDE_OPEN]: {
            yIndex: 3,
            xPosition: 2.76,
            zOffset: -0.07
        },
        [BENNETT_GATE_SIDE_OPEN]: {
            yIndex: 1,
            xPosition: 9
        }
    },
    [FIXTURE]: {
        [LIGHT_SWITCH__OFF]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.5,
            rotate: 180
        },
        [LIGHT_SWITCH__ON]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.5
        },
        [LINGERIE_DRAWING]: {
            yIndex: 4,
            xPosition: 7
        },
        [VASELINE]: {
            yIndex: 4,
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
