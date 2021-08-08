import {
    BUBBLE,
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import {
    BUBBLE_SMALL__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_LARGE__RIGHT,
} from '../../../../../src/constants/scene/things/bubbles'
import {
    CAMPUS_TREE_SINGLE__TETHERBALL,
    CAMPUS_TREE_DOUBLE__TETHERBALL,
} from '../../../../../src/constants/scene/things/cutouts'
import { SCHOOL_BUNGALOW } from '../../../../../src/constants/scene/things/flats'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [BUBBLE]: {
        [BUBBLE_LARGE__RIGHT]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 9.92,
            zOffset: 5.3,
        },
        [BUBBLE_MEDIUM__RIGHT]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 9.73,
            zOffset: 6.25,
        },
        [BUBBLE_SMALL__RIGHT]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 9.3,
            zOffset: 6.6,
        },
    },
    [CUTOUT]: {
        [CAMPUS_TREE_DOUBLE__TETHERBALL]: {
            yIndex: 1,
            xPosition: 1.75,
            flipHorizontal: true,
        },
        [CAMPUS_TREE_SINGLE__TETHERBALL]: {
            yIndex: 1,
            xPosition: 9,
        },
    },
    [FLAT]: {
        [SCHOOL_BUNGALOW]: {
            yIndex: 2,
        },
    },
}
