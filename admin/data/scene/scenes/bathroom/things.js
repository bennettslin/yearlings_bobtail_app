import {
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import { ALBUM_JOHNNY_HORTON } from '../../../../../app/constants/scene/things/cardboards'
import {
    MIRRORED_SINK,
    TOWEL_RACK,
    LEMON_TREE__BATHROOM,
    ROSEBUSH_DOUBLE_BATHROOM,
    ROSEBUSH_SINGLE_BATHROOM,
} from '../../../../../app/constants/scene/things/cutouts'
import { DEFAULT_FENCE_BATHROOM } from '../../../../../app/constants/scene/things/doors'
import { RECORD_PLAYER_STOOL } from '../../../../../app/constants/scene/things/fixtures'
import { BATHTUB } from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [LEMON_TREE__BATHROOM]: {
            yIndex: 0,
            xPosition: 6.5,
        },
        [ROSEBUSH_DOUBLE_BATHROOM]: {
            yIndex: 0,
            xPosition: 1.5,
        },
        [ROSEBUSH_SINGLE_BATHROOM]: {
            yIndex: 0,
            xPosition: 10.5,
        },
    },
    [DOOR]: {
        [DEFAULT_FENCE_BATHROOM]: {},
    },
    [PANEL]: {
        [BATHTUB]: {
            yIndex: 4,
            xPosition: 4.5,
        },
    },
}

export const THINGS_BATHROOM_BATHING = {
    [CUTOUT]: {
        [TOWEL_RACK]: {
            yIndex: 2,
            xPosition: 2.5,
            zOffset: 1.5,
        },
        [MIRRORED_SINK]: {
            yIndex: 2,
            xPosition: 8.5,
        },
    },
}

export const THINGS_BATHROOM_SINGING = {
    [CARDBOARD]: {
        [ALBUM_JOHNNY_HORTON]: {
            yIndex: 4,
            xPosition: 9,
            perspective: 50,
            rotateY: 25,
            skewX: 5,
        },
    },
    [FIXTURE]: {
        [RECORD_PLAYER_STOOL]: {
            yIndex: 4,
            xPosition: 7.7,
        },
    },
}
