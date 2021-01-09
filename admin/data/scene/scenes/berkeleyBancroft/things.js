import {
    CUTOUT,
    DOOR,
    FLAT,
    PUPPET,
} from '../../../../../app/constants/scene/things'
import {
    CAMPUS_TREE_SINGLE__BANCROFT,
    ASH_CAN,
} from '../../../../../app/constants/scene/things/cutouts'
import { BANCROFT_DOOR } from '../../../../../app/constants/scene/things/doors'
import {
    DISTANT_BUILDINGS,
    BERKELEY_BUILDING_WIDE__BANCROFT,
} from '../../../../../app/constants/scene/things/flats'
import { GHOST_ODIN_CAMPUS } from '../../../../../app/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__BANCROFT]: {
            yIndex: 1,
            xPosition: 1.1,
            scaleFactor: 0.5,
        },
        [ASH_CAN]: {
            yIndex: 4,
            xPosition: 5.5,
        },
    },
    [DOOR]: {
        [BANCROFT_DOOR]: {
            yIndex: 3,
            xPosition: 9,
        },
    },
    [FLAT]: {
        [DISTANT_BUILDINGS]: {
            scaleFactor: 0.45,
        },
        [BERKELEY_BUILDING_WIDE__BANCROFT]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.4,
        },
    },
}

export const THINGS_BERKELEY_BANCROFT_VEGAN = {
    [PUPPET]: {
        [GHOST_ODIN_CAMPUS]: {
            yIndex: 5,
            xPosition: 6,
            scaleFactor: 0.2,
        },
    },
}
