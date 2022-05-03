import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    THOUGHT_MEDIUM__DEATHBED,
    THOUGHT_SMALL,
} from '../../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_LARGE__DEATHBED,
    BUBBLE_LARGE__INVERSE,
    BUBBLE_LARGE__TENNIS,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_MEDIUM__INVERSE,
    BUBBLE_MEDIUM__TENNIS,
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_SMALL__INVERSE,
    BUBBLE_SMALL__TENNIS,
} from '../../../../../src/constants/scene/things/bubbles'
import { IV_DRIP } from '../../../../../src/constants/scene/things/cutouts'
import { HOSPITAL_RECORD_PLAYER, TENNIS_BALL } from '../../../../../src/constants/scene/things/fixtures'
import { TENNIS_COURT } from '../../../../../src/constants/scene/things/flats'
import {
    DEATHBED_BLANKET,
    DEATHBED_PILLOW,
} from '../../../../../src/constants/scene/things/furnitures'
import {
    HOSPITAL_BED,
    HOSPITAL_BED_INTERIOR,
    HOSPITAL_RECORD_STAND,
} from '../../../../../src/constants/scene/things/panels'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [BACKDROP]: {
        [THOUGHT_MEDIUM__DEATHBED]: {
            yIndex: 0,
            xPosition: 3.25,
        },
    },
    [BUBBLE]: {
        [BUBBLE_LARGE__DEATHBED]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 1.6,
            zOffset: 5.2,
        },
        [BUBBLE_MEDIUM__DEATHBED]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 2.25,
            zOffset: 5.9,
        },
        [BUBBLE_SMALL__DEATHBED]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 2.7,
            zOffset: 5.9,
        },
    },
    [CUTOUT]: {
        [IV_DRIP]: {
            yIndex: 1,
            xPosition: 3.7,
        },
    },
    [FIXTURE]: {
        [HOSPITAL_RECORD_PLAYER]: {
            yIndex: 2,
            xPosition: 6.4,
            zOffset: -0.15,
            layerYIndex: 5,
        },
        [TENNIS_BALL]: {
            yIndex: 3,
            xPosition: 10.6,
            zOffset: 7,
        },
    },
    [FURNITURE]: {
        [DEATHBED_BLANKET]: {
            yIndex: 3,
            xPosition: 2.4,
            zOffset: -0.06,
        },
        [DEATHBED_PILLOW]: {
            yIndex: 3,
            xPosition: 1.4,
            zOffset: 2.4,
        },
    },
    [PANEL]: {
        [HOSPITAL_BED_INTERIOR]: {
            yIndex: 1,
            xPosition: 2.53,
        },
        [HOSPITAL_BED]: {
            yIndex: 5,
            xPosition: 3.03,
        },
        [HOSPITAL_RECORD_STAND]: {
            yIndex: 5,
            xPosition: 6.4,
            zIndex: 1.1,
            layerYIndex: 4,
        },
    },
}

export const THINGS_DEATHBED_CREMATED = {
    [BACKDROP]: {
        [THOUGHT_SMALL]: {
            yIndex: 0,
            xPosition: 9.5,
        },
    },
    [BUBBLE]: {
        [BUBBLE_LARGE__TENNIS]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 7.71,
            zOffset: 3.37,
            layerYIndex: 0,
        },
        [BUBBLE_MEDIUM__TENNIS]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 7.06,
            zOffset: 4.05,
        },
        [BUBBLE_SMALL__TENNIS]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 6.63,
            zOffset: 4.35,
        },
    },
    [FLAT]: {
        [TENNIS_COURT]: {
            yIndex: 1,
            xPosition: 10,
        },
    },
}

export const THINGS_DEATHBED_DREAM = {
    [BUBBLE]: {
        [BUBBLE_LARGE__INVERSE]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 6.92,
            zOffset: 3.8,
        },
        [BUBBLE_MEDIUM__INVERSE]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 7.72,
            zOffset: 4.1,
        },
        [BUBBLE_SMALL__INVERSE]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 8.17,
            zOffset: 4.1,
        },
    },
}
