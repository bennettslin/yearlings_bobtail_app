import {
    CUTOUT,
    FLAT,
    PUPPET
} from '../../../../../app/constants/scene/things'
import {
    SIGNPOST,
    BANCROFT_SHRUB,
    CAMPUS_TREE_SINGLE__CAMPANILE,
    CAMPUS_TREE_DOUBLE__CAMPANILE
} from '../../../../../app/constants/scene/things/cutouts'
import {
    CAMPANILE,
    BERKELEY_BUILDING_TALL,
    BERKELEY_BUILDING_WIDE__CAMPANILE
} from '../../../../../app/constants/scene/things/flats'
import { GHOST_ODIN_DEMONSTRATION } from '../../../../../app/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [SIGNPOST]: {
            yIndex: 5,
            xPosition: 10.5,
            scaleFactor: 0.35
        },
        [BANCROFT_SHRUB]: {
            yIndex: 4,
            xPosition: 1,
            scaleFactor: 0.5
        },
        [CAMPUS_TREE_SINGLE__CAMPANILE]: {
            yIndex: 1,
            xPosition: 8.5,
            scaleFactor: 0.5
        },
        [CAMPUS_TREE_DOUBLE__CAMPANILE]: {
            yIndex: 2,
            xPosition: 10,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [CAMPANILE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.42
        },
        [BERKELEY_BUILDING_TALL]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.35
        },
        [BERKELEY_BUILDING_WIDE__CAMPANILE]: {
            yIndex: 3,
            xPosition: 10,
            scaleFactor: 0.4
        }
    }
}

export const THINGS_BERKELEY_CAMPANILE_VEGAN = {
    [PUPPET]: {
        [GHOST_ODIN_DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 1.2,
            scaleFactor: 0.2
        }
    }
}
