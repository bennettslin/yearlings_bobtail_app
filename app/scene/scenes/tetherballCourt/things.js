import {
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT
} from '../../../constants/scene'
import {
    BUBBLE_SMALL__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_LARGE__RIGHT,
    THOUGHT_LARGE__RIGHT
} from '../../../constants/scene/things/bubbles'
import {
    CAMPUS_TREE_SINGLE__TETHERBALL,
    CAMPUS_TREE_DOUBLE__TETHERBALL_LEFT,
    CAMPUS_TREE_DOUBLE__TETHERBALL_RIGHT
} from '../../../constants/scene/things/cutouts'
import { TETHERBALL_POLE } from '../../../constants/scene/things/fixtures'
import {
    CAMPUS_BUILDING_TALL__TETHERBALL,
    CAMPUS_BUILDING_WIDE__TETHERBALL
} from '../../../constants/scene/things/flats'
import { BUBBLE_SHARED, VAN_NUYS_SCHOOLHOUSE_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__RIGHT]: {
            yIndex: 0,
            xPosition: 9,
            zOffset: 8,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__RIGHT]: {
            yIndex: 0,
            xPosition: 9.5,
            zOffset: 7.75,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_LARGE__RIGHT]: {
            yIndex: 0,
            xPosition: 10,
            zOffset: 7,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [THOUGHT_LARGE__RIGHT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            flipHorizontal: true,
            sharedStyle: BUBBLE_SHARED
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
