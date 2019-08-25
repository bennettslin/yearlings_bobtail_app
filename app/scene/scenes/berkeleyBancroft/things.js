import {
    CUTOUT,
    PUPPET
} from '../../../constants/scene'
import {
    CAMPUS_TREE_SINGLE__BANCROFT,
    ASH_CAN
} from '../../../constants/scene/things/cutouts'
import { GHOST_ODIN_DEMONSTRATION } from '../../../constants/scene/things/puppets'
import { PEOPLE_ODIN_GHOST__SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__BANCROFT]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.5
        },
        [ASH_CAN]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.3
        }
    }
}

export const THINGS_BERKELEY_BANCROFT_VEGAN = {
    [PUPPET]: {
        [GHOST_ODIN_DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.2,
            sharedStyle: PEOPLE_ODIN_GHOST__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
