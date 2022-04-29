import {
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    POSTER_LEONARD_COHEN,
    POSTER_NIRVANA,
    ALBUM_POLICE,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    ALBUM_TELEVISION,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    TREE__COUCH,
    TREE_DEAD__COUCH,
} from '../../../../../src/constants/scene/things/cutouts'
import { TRANSOM } from '../../../../../src/constants/scene/things/doors'
import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    ELECTRIC_GUITAR,
    KEYBOARD,
    BEETHOVEN_BUST__COUCH,
} from '../../../../../src/constants/scene/things/fixtures'
import { BENNETT_PILLOW__COUCH } from '../../../../../src/constants/scene/things/furnitures'
import {
    BENNETT_NIGHTSTAND,
    BENNETT_RECORD_STAND,
    COUCH_SHELF,
    KEYBOARD_STAND_LEFT,
    KEYBOARD_STAND_RIGHT,
    WIDE_ARMREST_BENNETT__LEFT,
    WIDE_ARMREST_BENNETT__RIGHT,
    WIDE_COUCH_BENNETT,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [TREE__COUCH]: {
            yIndex: -1,
            xPosition: 4,
            zOffset: -6,
            scaleFactor: 1.175,
            counterpart: TREE_DEAD__COUCH,
        },
        [TREE_DEAD__COUCH]: {
            yIndex: -1,
            xPosition: 4,
            zOffset: -6,
            scaleFactor: 1.175,
            counterpart: TREE__COUCH,
        },
    },
    [DOOR]: {
        [TRANSOM]: {
            yIndex: 1,
            xPosition: 4,
            zOffset: 2.75,
        },
    },
    [FIXTURE]: {
        [BEETHOVEN_BUST__COUCH]: {
            yIndex: 1,
            xPosition: 2,
            zOffset: 1,
            scaleFactor: 0.33,
        },
        [BENNETT_RECORD_PLAYER]: {
            yIndex: 1,
            xPosition: 8.5,
        },
        [BENNETT_COUCH_LAMP]: {
            yIndex: 2,
            xPosition: 1,
        },
        [ELECTRIC_GUITAR]: {
            yIndex: 2,
            xPosition: 9.6,
            zOffset: -0.07,
        },
    },
    [FURNITURE]: {
        [BENNETT_PILLOW__COUCH]: {
            yIndex: 3,
            xPosition: 6,
        },
    },
    [PANEL]: {
        [BENNETT_NIGHTSTAND]: {
            yIndex: 2,
            xPosition: 0.88,
            zOffset: -2.08,
        },
        [BENNETT_RECORD_STAND]: {
            yIndex: 1,
            xPosition: 8.55,
            zOffset: -1.58,
        },
        [COUCH_SHELF]: {
            yIndex: 1,
            xPosition: 4,
            zOffset: 1,
        },
        [KEYBOARD_STAND_LEFT]: {
            yIndex: 4,
            xPosition: 5,
            zOffset: -0.59,
        },
        [KEYBOARD_STAND_RIGHT]: {
            yIndex: 4,
            xPosition: 8,
            zOffset: -0.59,
        },
        [WIDE_COUCH_BENNETT]: {
            yIndex: 2,
            xPosition: 4,
        },
        [WIDE_ARMREST_BENNETT__LEFT]: {
            yIndex: 4,
            xPosition: 1.1,
        },
        [WIDE_ARMREST_BENNETT__RIGHT]: {
            yIndex: 4,
            xPosition: 6.9,
            flipHorizontal: true,
        },
    },
}

export const THINGS_BENNETT_COUCH_OPINION = {
    [CARDBOARD]: {
        [ALBUM_POLICE]: {
            yIndex: 2,
            xPosition: 8,
            perspective: 50,
            rotateX: 10,
            skewX: 4,
        },
        [POSTER_NIRVANA]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 1.5,
        },
    },
}

export const THINGS_BENNETT_COUCH_PONDERING = {
    [CARDBOARD]: {
        [POSTER_LEONARD_COHEN]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 1.5,
        },
    },
}

export const THINGS_BENNETT_COUCH_RUBIKS = {
    [CARDBOARD]: {
        [ALBUM_TELEVISION]: {
            yIndex: 2,
            xPosition: 8,
            perspective: 50,
            rotateX: 10,
            skewX: 4,
        },
        [PROGRESS_CHART_EARLY]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 1.5,
            counterpart: PROGRESS_CHART_LATE,
        },
    },
}

export const THINGS_BENNETT_COUCH_READING = {
    [CARDBOARD]: {
        [PROGRESS_CHART_LATE]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 1.5,
            counterpart: PROGRESS_CHART_EARLY,
        },
    },
    [FIXTURE]: {
        [KEYBOARD]: {
            yIndex: 4,
            xPosition: 6.5,
            zOffset: 0.42,
        },
    },
}
