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
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [UC_BERKELEY_TREE_LEFT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 1,
                xWidth: 2,
                zHeight: 4
            }
        }
    },
    [FIXTURES]: {
        [ASH_CAN]: {
            yIndex: 4,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 3
            }
        }
    },
    [PUPPETS]: {
        [GHOST_ODIN_DEMONSTRATION]: {
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
