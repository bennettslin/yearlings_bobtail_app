import {
    CUTOUT,
    FLAT,
    PUPPET
} from 'constants/scene'
import {
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE__RIGHT
} from 'constants/scene/things/cutouts'
import { CAMPANILE } from 'constants/scene/things/flats'
import { GHOST_ODIN_CAMPUS } from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [SIGNPOST]: {
            yIndex: 5,
            arrangement: {
                xPosition: 10.5,
                xWidth: 1,
                zHeight: 7
            }
        },
        [BANCROFT_SHRUBS]: {
            yIndex: 4,
            xPosition: 2,
            scaleFactor: 0.5
        },
        [UC_BERKELEY_TREE__RIGHT]: {
            yIndex: 2,
            xPosition: 9.5,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [CAMPANILE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 6,
                xWidth: 3,
                zHeight: 7.5
            }
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
