import {
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    PANEL
} from '../../../../../app/constants/scene/things'
import { JOHNNY_HORTON_ALBUM } from '../../../../../app/constants/scene/things/cardboards'
import {
    MIRRORED_SINK,
    TOWEL_RACK,
    LEMON_TREE__BATHROOM,
    ROSEBUSH_DOUBLE_BATHROOM,
    ROSEBUSH_SINGLE_BATHROOM
} from '../../../../../app/constants/scene/things/cutouts'
import { RECORD_PLAYER_STOOL } from '../../../../../app/constants/scene/things/fixtures'
import {
    BATHTUB,
    DEFAULT_FENCE_BATHROOM
} from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [LEMON_TREE__BATHROOM]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [ROSEBUSH_DOUBLE_BATHROOM]: {
            yIndex: 1,
            xPosition: 0.5,
            scaleFactor: 0.3
        },
        [ROSEBUSH_SINGLE_BATHROOM]: {
            yIndex: 1,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    },
    [PANEL]: {
        [BATHTUB]: {
            yIndex: 4,
            xPosition: 4.5,
            scaleFactor: 0.3
        },
        [DEFAULT_FENCE_BATHROOM]: {
            yIndex: 0,
            scaleFactor: 0.5
        }
    }
}

export const THINGS_BATHROOM_BATHING = {
    [CUTOUT]: {
        [TOWEL_RACK]: {
            yIndex: 2,
            xPosition: 2.5,
            zOffset: 1.5,
            scaleFactor: 0.32
        },
        [MIRRORED_SINK]: {
            yIndex: 2,
            xPosition: 8.5,
            scaleFactor: 0.32
        }
    }
}

export const THINGS_BATHROOM_SINGING = {
    [CARDBOARD]: {
        [JOHNNY_HORTON_ALBUM]: {
            yIndex: 4,
            xPosition: 9,
            scaleFactor: 0.15,
            perspective: 50,
            rotateY: 25,
            skewX: 5
        }
    },
    [FIXTURE]: {
        [RECORD_PLAYER_STOOL]: {
            yIndex: 4,
            xPosition: 7.7,
            scaleFactor: 0.25
        }
    }
}
