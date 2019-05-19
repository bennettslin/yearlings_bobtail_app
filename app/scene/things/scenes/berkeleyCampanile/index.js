import {
    CUTOUTS,
    FLATS,
    PUPPETS
} from 'constants/scene'
import {
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE_RIGHT
} from '../../keys/cutouts'
import { CAMPANILE } from '../../keys/flats'
import { GHOST_ODIN_CAMPUS } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [SIGNPOST]: {
            yIndex: 5,
            arrangement: {
                xFloat: 10.5,
                xWidth: 1,
                zHeight: 7
            }
        },
        [BANCROFT_SHRUBS]: {
            yIndex: 4,
            arrangement: {
                xFloat: 2.5,
                xWidth: 3,
                zHeight: 3
            }
        },
        [UC_BERKELEY_TREE_RIGHT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 9.5,
                xWidth: 2,
                zHeight: 4
            }
        }
    },
    [FLATS]: {
        [CAMPANILE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 6,
                xWidth: 3,
                zHeight: 7.5
            }
        }
    }
}

export const THINGS_BERKELEY_CAMPANILE_VEGAN = {
    [PUPPETS]: {
        [GHOST_ODIN_CAMPUS]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
