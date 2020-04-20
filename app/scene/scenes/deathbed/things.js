import {
    CUTOUT,
    BUBBLE,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL
} from '../../../constants/scene/things'
import {
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_LARGE__DEATHBED,
    THOUGHT_MEDIUM__DEATHBED,
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
import {
    DEATHBED_BLANKET,
    DEATHBED_PILLOW
} from '../../../constants/scene/things/furnitures'
import { HOSPITAL_BED } from '../../../constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [BUBBLE_SMALL__DEATHBED]: {
            yIndex: 0,
            xPosition: 2.51,
            zOffset: 7
        },
        [BUBBLE_MEDIUM__DEATHBED]: {
            yIndex: 0,
            xPosition: 2,
            zOffset: 7
        },
        [BUBBLE_LARGE__DEATHBED]: {
            yIndex: 0,
            xPosition: 1.1,
            zOffset: 6.42
        },
        [THOUGHT_MEDIUM__DEATHBED]: {
            yIndex: 0,
            xPosition: 3.25,
            scaleFactor: 0.55
        }
    },
    [CUTOUT]: {
        [IV_DRIP]: {
            yIndex: 1,
            xPosition: 3.7,
            scaleFactor: 0.35
        }
    },
    [FIXTURE]: {
        [HOSPITAL_RECORD_PLAYER]: {
            yIndex: 2,
            xPosition: 6.4,
            zOffset: -0.15,
            layerYIndex: 5
        }
    },
    [FURNITURE]: {
        [DEATHBED_BLANKET]: {
            yIndex: 3,
            xPosition: 2.4,
            zOffset: -0.06
        },
        [DEATHBED_PILLOW]: {
            yIndex: 3,
            xPosition: 1.4,
            zOffset: 2.4
        }
    },
    [PANEL]: {
        [HOSPITAL_BED]: {
            yIndex: 5,
            xPosition: 3.03,
            scaleFactor: 0.27
        }
    }
}

export const THINGS_DEATHBED_CREMATED = {
    [BUBBLE]: {
        [BUBBLE_SMALL__TENNIS]: {
            yIndex: 0,
            xPosition: 7,
            zOffset: 4.65
        },
        [BUBBLE_MEDIUM__TENNIS]: {
            yIndex: 0,
            xPosition: 7.5,
            zOffset: 4.25
        },
        [BUBBLE_LARGE__TENNIS]: {
            yIndex: 0,
            xPosition: 8.2,
            zOffset: 3.35
        },
        [THOUGHT_SMALL]: {
            yIndex: 0,
            xPosition: 9.5,
            scaleFactor: 0.5
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
        [BUBBLE_LARGE__INVERSE]: {
            yIndex: 0,
            xPosition: 7,
            zOffset: 5
        },
        [BUBBLE_MEDIUM__INVERSE]: {
            yIndex: 0,
            xPosition: 7.95,
            zOffset: 5
        },
        [BUBBLE_SMALL__INVERSE]: {
            yIndex: 0,
            xPosition: 8.43,
            zOffset: 4.9
        }
    }
}
