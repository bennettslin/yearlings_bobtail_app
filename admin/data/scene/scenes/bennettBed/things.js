import {
    CUTOUT,
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL
} from '../../../../../app/constants/scene/things'
import {
    BLINDS_OUTSIDE__NEIGHBOUR,
    NEIGHBOUR_DOOR,
    BLINDS_INSIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_GATE_SIDE_OPEN
} from '../../../../../app/constants/scene/things/doors'
import {
    LIGHT_SWITCH__OFF,
    LIGHT_SWITCH__ON,
    LINGERIE_DRAWING,
    VASELINE
} from '../../../../../app/constants/scene/things/fixtures'
import { RECYCLABLES__NEIGHBOUR } from '../../../../../app/constants/scene/things/cutouts'
import { BENNETT_PILLOW__BED } from '../../../../../app/constants/scene/things/furnitures'
import { BENNETT_BED } from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [RECYCLABLES__NEIGHBOUR]: {
            yIndex: 1,
            xPosition: 3.5,
            scaleFactor: 0.3
        }
    },
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
            xPosition: 8.4,
            zOffset: -0.3
        }
    },
    [FIXTURE]: {
        [LIGHT_SWITCH__OFF]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.15,
            rotate: 180
        },
        [LIGHT_SWITCH__ON]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.15
        },
        [LINGERIE_DRAWING]: {
            yIndex: 4,
            xPosition: 5.9
        },
        [VASELINE]: {
            yIndex: 4,
            xPosition: 7.5
        }
    },
    [FURNITURE]: {
        [BENNETT_PILLOW__BED]: {
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
