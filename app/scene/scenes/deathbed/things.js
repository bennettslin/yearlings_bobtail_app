import {
    CUTOUT,
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'
import {
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_LARGE__DEATHBED,
    BUBBLE_SMALL__TENNIS,
    BUBBLE_MEDIUM__TENNIS,
    BUBBLE_LARGE__TENNIS,
    BUBBLE_SMALL__INVERSE,
    BUBBLE_MEDIUM__INVERSE,
    BUBBLE_LARGE__INVERSE
} from 'constants/scene/things/bubbles'
import { IV_DRIP } from 'constants/scene/things/cutouts'
import { HOSPITAL_RECORD_PLAYER } from 'constants/scene/things/fixtures'
import { TENNIS_COURT } from 'constants/scene/things/flats'
import {
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    INVERSE_THOUGHT_PANEL,
    HOSPITAL_BED
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [IV_DRIP]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.35
        }
    },
    [FIXTURE]: {
        [HOSPITAL_RECORD_PLAYER]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1,
                xWidth: 1.5,
                zHeight: 0.5
            }
        }
    },
    [PANEL]: {
        [HOSPITAL_BED]: {
            yIndex: 5,
            xPosition: 3,
            scaleFactor: 0.27
        }
    }
}

export const THINGS_DEATHBED_CREMATED = {
    [BUBBLE]: {
        [BUBBLE_SMALL__DEATHBED]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_MEDIUM__DEATHBED]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_LARGE__DEATHBED]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_SMALL__TENNIS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_MEDIUM__TENNIS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_LARGE__TENNIS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        }
    },
    [FLAT]: {
        [TENNIS_COURT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 4
            }
        }
    },
    [PANEL]: {
        [DEATHBED_THOUGHT_PANEL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 4,
                xWidth: 8,
                zHeight: 6
            }
        },
        [TENNIS_THOUGHT_PANEL]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 4
            }
        }
    }
}

export const THINGS_DEATHBED_DREAM = {
    [BUBBLE]: {
        [BUBBLE_SMALL__INVERSE]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_MEDIUM__INVERSE]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        },
        [BUBBLE_LARGE__INVERSE]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        }
    },
    [PANEL]: {
        [INVERSE_THOUGHT_PANEL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
