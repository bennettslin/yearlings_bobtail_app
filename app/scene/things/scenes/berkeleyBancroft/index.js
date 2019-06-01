import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    PUPPETS
} from 'constants/scene'
import { UC_BERKELEY_BACKDROP } from '../../keys/backdrops'
import { UC_BERKELEY_TREE_LEFT } from '../../keys/cutouts'
import { ASH_CAN } from '../../keys/fixtures'
import { GHOST_ODIN_DEMONSTRATION } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [UC_BERKELEY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [UC_BERKELEY_TREE_LEFT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 1,
                xWidth: 2,
                zHeight: 4
            }
        }
    },
    [FIXTURES]: {
        [ASH_CAN]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 3
            }
        }
    }
}

export const THINGS_BERKELEY_BANCROFT_VEGAN = {
    [PUPPETS]: {
        [GHOST_ODIN_DEMONSTRATION]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
