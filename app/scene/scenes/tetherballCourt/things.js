import {
    BUBBLE,
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import {
    BUBBLE_SMALL__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_LARGE__RIGHT,
    THOUGHT_LARGE__RIGHT
} from '../../../constants/scene/things/bubbles'
import {
    CAMPUS_TREE_SINGLE__TETHERBALL,
    CAMPUS_TREE_DOUBLE__TETHERBALL
} from '../../../constants/scene/things/cutouts'
import { SCHOOL_BUNGALOW } from '../../../constants/scene/things/flats'

export default {
    [BUBBLE]: {
        [BUBBLE_SMALL__RIGHT]: {
            yIndex: 0,
            xPosition: 10.2,
            zOffset: 8
        },
        [BUBBLE_MEDIUM__RIGHT]: {
            yIndex: 0,
            xPosition: 10.7,
            zOffset: 7.6
        },
        [BUBBLE_LARGE__RIGHT]: {
            yIndex: 0,
            xPosition: 11,
            zOffset: 6.45
        },
        [THOUGHT_LARGE__RIGHT]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6,
            flipHorizontal: true
        }
    },
    [CUTOUT]: {
        [CAMPUS_TREE_SINGLE__TETHERBALL]: {
            yIndex: 1,
            xPosition: 3,
            scaleFactor: 0.5
        },
        [CAMPUS_TREE_DOUBLE__TETHERBALL]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [SCHOOL_BUNGALOW]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}
