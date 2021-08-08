import {
    CUTOUT,
    FLAT,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import {
    SIGNPOST,
    STINK_PLANT,
    CAMPUS_TREE_SINGLE__CAMPANILE,
    CAMPUS_TREE_DOUBLE__CAMPANILE,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    CAMPANILE,
    BERKELEY_BUILDING_TALL,
    BERKELEY_BUILDING_WIDE__CAMPANILE,
} from '../../../../../src/constants/scene/things/flats'
import { GHOST_ODIN_DEMONSTRATION } from '../../../../../src/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [SIGNPOST]: {
            yIndex: 5,
            xPosition: 10.5,
        },
        [STINK_PLANT]: {
            yIndex: 4,
            xPosition: 1.5,
        },
        [CAMPUS_TREE_SINGLE__CAMPANILE]: {
            yIndex: 1,
            xPosition: 8.9,
            scaleFactor: 0.7,
        },
        [CAMPUS_TREE_DOUBLE__CAMPANILE]: {
            yIndex: 2,
            xPosition: 10.8,
            scaleFactor: 0.7,
        },
    },
    [FLAT]: {
        [CAMPANILE]: {
            yIndex: 1,
        },
        [BERKELEY_BUILDING_TALL]: {
            yIndex: 2,
            xPosition: 9,
        },
        [BERKELEY_BUILDING_WIDE__CAMPANILE]: {
            yIndex: 3,
            xPosition: 10,
        },
    },
}

export const THINGS_BERKELEY_CAMPANILE_VEGAN = {
    [PUPPET]: {
        [GHOST_ODIN_DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 1.2,
        },
    },
}
