import {
    CUTOUT,
    FIXTURE,
    PUPPET
} from '../../../constants/scene'
import { CAMPUS_TREE_SINGLE__BANCROFT } from '../../../constants/scene/things/cutouts'
import { ASH_CAN } from '../../../constants/scene/things/fixtures'
import {
    GHOST_ODIN_DEMONSTRATION
} from '../../../constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__BANCROFT]: {
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
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.2
        }
    }
}

export default ARRANGEMENTS_THINGS
