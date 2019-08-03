import {
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT
} from 'constants/scene'
import {
    BUBBLE_SMALL__TETHERBALL,
    BUBBLE_MEDIUM__TETHERBALL,
    BUBBLE_LARGE__TETHERBALL
} from 'constants/scene/things/bubbles'
import {
    CAMPUS_TREE_SINGLE__TETHERBALL,
    CAMPUS_TREE_DOUBLE__TETHERBALL_LEFT,
    CAMPUS_TREE_DOUBLE__TETHERBALL_RIGHT
} from 'constants/scene/things/cutouts'
import { TETHERBALL_POLE } from 'constants/scene/things/fixtures'
import {
    CAMPUS_BUILDING_TALL__TETHERBALL,
    CAMPUS_BUILDING_WIDE__TETHERBALL
} from 'constants/scene/things/flats'
import { VAN_NUYS_SCHOOLHOUSE_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__TETHERBALL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        },
        [BUBBLE_MEDIUM__TETHERBALL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        },
        [BUBBLE_LARGE__TETHERBALL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        }
    },
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__TETHERBALL]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.5
        },
        [CAMPUS_TREE_DOUBLE__TETHERBALL_LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            scaleFactor: 0.5
        },
        [CAMPUS_TREE_DOUBLE__TETHERBALL_RIGHT]: {
            yIndex: 1,
            xPosition: 9.5,
            scaleFactor: 0.5
        }
    },
    [FIXTURE]: {
        [TETHERBALL_POLE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 0.5,
                zHeight: 6
            }
        }
    },
    [FLAT]: {
        [CAMPUS_BUILDING_TALL__TETHERBALL]: {
            yIndex: 2,
            xPosition: 3.25,
            scaleFactor: 0.5,
            sharedStyle: VAN_NUYS_SCHOOLHOUSE_SHARED
        },
        [CAMPUS_BUILDING_WIDE__TETHERBALL]: {
            yIndex: 2,
            xPosition: 7.75,
            scaleFactor: 0.5,
            sharedStyle: VAN_NUYS_SCHOOLHOUSE_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
