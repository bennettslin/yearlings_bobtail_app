import {
    CUTOUT,
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from '../../../constants/scene'
import {
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_LARGE__DEATHBED,
    THOUGHT_MEDIUM,
    BUBBLE_SMALL__TENNIS,
    BUBBLE_MEDIUM__TENNIS,
    BUBBLE_LARGE__TENNIS,
    THOUGHT_SMALL,
    BUBBLE_SMALL__INVERSE,
    BUBBLE_MEDIUM__INVERSE,
    BUBBLE_LARGE__INVERSE
} from '../../../constants/scene/things/bubbles'
import { IV_DRIP } from '../../../constants/scene/things/cutouts'
import { HOSPITAL_RECORD_PLAYER } from '../../../constants/scene/things/fixtures'
import { TENNIS_COURT } from '../../../constants/scene/things/flats'
import { HOSPITAL_BED } from '../../../constants/scene/things/panels'
import { BUBBLE_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__DEATHBED]: {
            yIndex: 0,
            xPosition: 2,
            zOffset: 7,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__DEATHBED]: {
            yIndex: 0,
            xPosition: 1.5,
            zOffset: 6.75,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_LARGE__DEATHBED]: {
            yIndex: 0,
            xPosition: 1,
            zOffset: 6,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [THOUGHT_MEDIUM]: {
            yIndex: 0,
            xPosition: 3.25,
            scaleFactor: 0.55,
            sharedStyle: BUBBLE_SHARED
        }
    },
    [CUTOUT]: {
        [IV_DRIP]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.35
        }
    },
    [FIXTURE]: {
        [HOSPITAL_RECORD_PLAYER]: {
            yIndex: 1,
            xPosition: 6
        }
    },
    [PANEL]: {
        [HOSPITAL_BED]: {
            yIndex: 5,
            xPosition: 3.25,
            scaleFactor: 0.27
        }
    }
}

export const THINGS_DEATHBED_CREMATED = {
    [BUBBLE]: {
        [BUBBLE_SMALL__TENNIS]: {
            yIndex: 0,
            xPosition: 6,
            zOffset: 3.25,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__TENNIS]: {
            yIndex: 0,
            xPosition: 6.5,
            zOffset: 3,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_LARGE__TENNIS]: {
            yIndex: 0,
            xPosition: 7.25,
            zOffset: 2.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [THOUGHT_SMALL]: {
            yIndex: 0,
            xPosition: 9.5,
            scaleFactor: 0.5,
            sharedStyle: BUBBLE_SHARED
        }
    },
    [FLAT]: {
        [TENNIS_COURT]: {
            yIndex: 1,
            xPosition: 10,
            scaleFactor: 0.4
        }
    }
}

export const THINGS_DEATHBED_DREAM = {
    [BUBBLE]: {
        [BUBBLE_SMALL__INVERSE]: {
            yIndex: 0,
            xPosition: 7.75,
            zOffset: 5.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__INVERSE]: {
            yIndex: 0,
            xPosition: 7.25,
            zOffset: 5.5,
            scaleFactor: 0.45,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_LARGE__INVERSE]: {
            yIndex: 0,
            xPosition: 6.5,
            zOffset: 5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
