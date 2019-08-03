import {
    CUTOUT,
    FLAT,
    PUPPET
} from 'constants/scene'
import {
    SIGNPOST,
    BANCROFT_SHRUB,
    CAMPUS_TREE_SINGLE__CAMPANILE,
    CAMPUS_TREE_DOUBLE__CAMPANILE
} from 'constants/scene/things/cutouts'
import {
    CAMPANILE,
    CAMPUS_BUILDING_TALL__BERKELEY,
    CAMPUS_BUILDING_WIDE__BERKELEY
} from 'constants/scene/things/flats'
import { GHOST_ODIN_CAMPUS } from 'constants/scene/things/puppets'
import { BERKELEY_BUILDING_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [SIGNPOST]: {
            yIndex: 5,
            xPosition: 10.5,
            scaleFactor: 0.35,
            flipHorizontal: true
        },
        [BANCROFT_SHRUB]: {
            yIndex: 4,
            xPosition: 2,
            scaleFactor: 0.5
        },
        [CAMPUS_TREE_SINGLE__CAMPANILE]: {
            yIndex: 1,
            xPosition: 3.5,
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
            xPosition: 6.25,
            scaleFactor: 0.45
        },
        [CAMPUS_BUILDING_TALL__BERKELEY]: {
            yIndex: 1,
            xPosition: 9.5,
            scaleFactor: 0.35,
            sharedStyle: BERKELEY_BUILDING_SHARED
        },
        [CAMPUS_BUILDING_WIDE__BERKELEY]: {
            yIndex: 3,
            xPosition: 10,
            scaleFactor: 0.4,
            sharedStyle: BERKELEY_BUILDING_SHARED
        }
    }
}

export const THINGS_BERKELEY_CAMPANILE_VEGAN = {
    [PUPPET]: {
        [GHOST_ODIN_CAMPUS]: {
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
