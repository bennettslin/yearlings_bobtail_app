import {
    BACKDROP,
    CUTOUT,
    FIXTURE,
    PUPPET
} from 'constants/scene'
import { UC_BERKELEY_BACKDROP } from 'constants/scene/things/backdrops'
import { UC_BERKELEY_TREE__LEFT } from 'constants/scene/things/cutouts'
import { ASH_CAN } from 'constants/scene/things/fixtures'
import { GHOST_ODIN_DEMONSTRATION } from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [UC_BERKELEY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [UC_BERKELEY_TREE__LEFT]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.5
        }
    },
    [FIXTURE]: {
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
    [PUPPET]: {
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
