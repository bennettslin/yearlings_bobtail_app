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
    SCHOOL_BUNGALOW__LEFT,
    SCHOOL_BUNGALOW__RIGHT
} from '../../../constants/scene/things/flats'
import { TETHERBALL_POLE__SHARED } from '../../shared/outdoor'
import { BUBBLE__SHARED } from '../../shared/props'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__RIGHT]: {
            yIndex: 0,
            xPosition: 9,
            zOffset: 8,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_MEDIUM__RIGHT]: {
            yIndex: 0,
            xPosition: 9.5,
            zOffset: 7.75,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_LARGE__RIGHT]: {
            yIndex: 0,
            xPosition: 10,
            zOffset: 7,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [THOUGHT_LARGE__RIGHT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            flipHorizontal: true,
            sharedStyle: BUBBLE__SHARED
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
            xPosition: 7,
            scaleFactor: 0.225,
            sharedStyle: TETHERBALL_POLE__SHARED
        }
    },
    [FLAT]: {
        [SCHOOL_BUNGALOW__LEFT]: {
            yIndex: 2,
            xPosition: 3.25,
            scaleFactor: 0.5
        },
        [SCHOOL_BUNGALOW__RIGHT]: {
            yIndex: 2,
            xPosition: 7.75,
            scaleFactor: 0.5,
            flipHorizontal: true
        }
    }
}

export default ARRANGEMENTS_THINGS
