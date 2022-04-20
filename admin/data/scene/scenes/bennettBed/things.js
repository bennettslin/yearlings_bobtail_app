import {
    CUTOUT,
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    BLINDS_OUTSIDE__NEIGHBOUR,
    NEIGHBOUR_DOOR,
    BLINDS_INSIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_GATE_SIDE_OPEN,
} from '../../../../../src/constants/scene/things/doors'
import {
    LIGHT_SWITCH__OFF,
    LIGHT_SWITCH__ON,
    LINGERIE_DRAWING,
    VASELINE,
} from '../../../../../src/constants/scene/things/fixtures'
import { RECYCLING_BIN__NEIGHBOUR } from '../../../../../src/constants/scene/things/cutouts'
import { BENNETT_PILLOW__BED } from '../../../../../src/constants/scene/things/furnitures'
import { BENNETT_BED } from '../../../../../src/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [RECYCLING_BIN__NEIGHBOUR]: {
            yIndex: 1,
            xPosition: 3.5,
            scaleFactor: 0.85,
        },
    },
    [DOOR]: {
        [BLINDS_OUTSIDE__NEIGHBOUR]: {
            yIndex: 1,
            xPosition: 5,
            zOffset: 1.475,
            scaleFactor: 0.86,
        },
        [NEIGHBOUR_DOOR]: {
            yIndex: 1,
            xPosition: 1,
        },
        [BLINDS_INSIDE_OPEN]: {
            yIndex: 3,
            xPosition: 7.5,
            zOffset: 1.75,
        },
        [BENNETT_DOOR_INSIDE]: {
            yIndex: 3,
            xPosition: 3,
            counterpart: BENNETT_DOOR_INSIDE_OPEN,
        },
        [BENNETT_DOOR_INSIDE_OPEN]: {
            yIndex: 3,
            xPosition: 2.76,
            zOffset: -0.07,
            counterpart: BENNETT_DOOR_INSIDE,
        },
        [BENNETT_GATE_SIDE_OPEN]: {
            yIndex: 1,
            xPosition: 8.4,
            zOffset: -0.3,
        },
    },
    [FIXTURE]: {
        [LIGHT_SWITCH__OFF]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.2,
            rotate: 180,
            counterpart: LIGHT_SWITCH__ON,
        },
        [LIGHT_SWITCH__ON]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.2,
            counterpart: LIGHT_SWITCH__OFF,
        },
        [LINGERIE_DRAWING]: {
            yIndex: 4,
            xPosition: 5.9,
            zOffset: -0.03,
        },
        [VASELINE]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: -0.03,
        },
    },
    [FURNITURE]: {
        [BENNETT_PILLOW__BED]: {
            yIndex: 4,
            xPosition: 9.5,
        },
    },
    [PANEL]: {
        [BENNETT_BED]: {
            yIndex: 5,
            xPosition: 7.5,
        },
    },
}
