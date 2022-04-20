import {
    CUTOUT,
    DOOR,
    FLAT,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import {
    CAMPUS_TREE_SINGLE__BANCROFT,
    ASH_CAN,
} from '../../../../../src/constants/scene/things/cutouts'
import { BANCROFT_DOOR } from '../../../../../src/constants/scene/things/doors'
import {
    DISTANT_BUILDINGS,
    BERKELEY_BUILDING_WIDE__BANCROFT,
} from '../../../../../src/constants/scene/things/flats'
import { GHOST_ODIN_CAMPUS } from '../../../../../src/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__BANCROFT]: {
            yIndex: 1,
            xPosition: 1.1,
            scaleFactor: 0.7,
        },
        [ASH_CAN]: {
            yIndex: 4,
            zOffset: -0.05,
        },
    },
    [DOOR]: {
        [BANCROFT_DOOR]: {
            yIndex: 3,
            xPosition: 9,
        },
    },
    [FLAT]: {
        [DISTANT_BUILDINGS]: {},
        [BERKELEY_BUILDING_WIDE__BANCROFT]: {
            yIndex: 2,
            xPosition: 2.5,
        },
    },
}

export const THINGS_BERKELEY_BANCROFT_VEGAN = {
    [PUPPET]: {
        [GHOST_ODIN_CAMPUS]: {
            yIndex: 5,
            xPosition: 6,
        },
    },
}
