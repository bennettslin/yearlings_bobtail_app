import {
    BUBBLE,
    CUTOUT,
    FLAT,
} from '../../../../../app/constants/scene/things'
import {
    BUBBLE_SMALL__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_LARGE__RIGHT,
} from '../../../../../app/constants/scene/things/bubbles'
import {
    CAMPUS_TREE_SINGLE__TETHERBALL,
    CAMPUS_TREE_DOUBLE__TETHERBALL,
} from '../../../../../app/constants/scene/things/cutouts'
import { SCHOOL_BUNGALOW } from '../../../../../app/constants/scene/things/flats'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG
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
            scaleFactor: 0.7,
            flipHorizontal: true,
        },
        [CAMPUS_TREE_SINGLE__TETHERBALL]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.7,
        },
    },
    [FLAT]: {
        [SCHOOL_BUNGALOW]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.7,
        },
    },
}
