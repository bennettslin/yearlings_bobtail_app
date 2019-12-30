import {
    CUTOUT,
    DOOR,
    FLAT,
    PUPPET
} from '../../../constants/scene/things'
import {
    CAMPUS_TREE_SINGLE__BANCROFT,
    ASH_CAN
} from '../../../constants/scene/things/cutouts'
import { BANCROFT_DOOR } from '../../../constants/scene/things/doors'
import { BERKELEY_BUILDING_WIDE__BANCROFT } from '../../../constants/scene/things/flats'
import { GHOST_ODIN_DEMONSTRATION } from '../../../constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__BANCROFT]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.5
        },
        [ASH_CAN]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [BANCROFT_DOOR]: {
            yIndex: 3,
            xPosition: 9
        }
    },
    [FLAT]: {
        [BERKELEY_BUILDING_WIDE__BANCROFT]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.4
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
