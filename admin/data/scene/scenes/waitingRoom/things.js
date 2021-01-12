import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    BUBBLE_SMALL__WAITING,
    BUBBLE_MEDIUM__WAITING,
    BUBBLE_LARGE__WAITING,
    WAITING_THOUGHT_WALKING,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
} from '../../../../../app/constants/scene/things/bubbles'
import {
    CLIPBOARD,
    PAINTING,
} from '../../../../../app/constants/scene/things/cardboards'
import { WAITING_ROOM_PLANT } from '../../../../../app/constants/scene/things/cutouts'
import {
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
} from '../../../../../app/constants/scene/things/doors'
import {
    WAITING_ARMCHAIR__BENNETT,
    WAITING_ARMREST__BENNETT_LEFT,
    WAITING_ARMREST__BENNETT_RIGHT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_ARMREST__LIZ_LEFT,
    WAITING_ARMREST__LIZ_RIGHT,
} from '../../../../../app/constants/scene/things/panels'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [CARDBOARD]: {
        [CLIPBOARD]: {
            yIndex: 2,
            xPosition: 9.5,
            zOffset: 2,
            scaleFactor: 0.45,
        },
        [PAINTING]: {
            yIndex: 2,
            xPosition: 4,
            scaleFactor: 0.5,
            zOffset: 4,
        },
    },
    [CUTOUT]: {
        [WAITING_ROOM_PLANT]: {
            yIndex: 2,
            xPosition: 7.5,
        },
    },
    [DOOR]: {
        [WAITING_ROOM_DOOR]: {
            yIndex: 5,
            xPosition: 10.16,
        },
        [WAITING_ROOM_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.81,
        },
    },
    [PANEL]: {
        [WAITING_ARMCHAIR__BENNETT]: {
            yIndex: 2,
            xPosition: 2.5,
        },
        [WAITING_ARMCHAIR__LIZ]: {
            yIndex: 2,
            xPosition: 5.5,
            flipHorizontal: true,
        },
        [WAITING_ARMREST__BENNETT_LEFT]: {
            yIndex: 4,
            xPosition: 1.3,
        },
        [WAITING_ARMREST__BENNETT_RIGHT]: {
            yIndex: 4,
            xPosition: 3.7,
            flipHorizontal: true,
            layerYIndex: 5,
        },
        [WAITING_ARMREST__LIZ_LEFT]: {
            yIndex: 4,
            xPosition: 4.3,
        },
        [WAITING_ARMREST__LIZ_RIGHT]: {
            yIndex: 4,
            xPosition: 6.7,
            flipHorizontal: true,
        },
    },
}

export const THINGS_WAITING_ROOM_ASLEEP = {
    [BUBBLE]: {
        [BUBBLE_LARGE__WAITING]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 1.05,
            zOffset: 3.9,
        },
        [BUBBLE_MEDIUM__WAITING]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 1.15,
            zOffset: 3.37,
        },
        [BUBBLE_SMALL__WAITING]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 1.55,
            zOffset: 3.25,
        },
        [WAITING_THOUGHT_STUDYING]: {
            yIndex: 5,
            xPosition: 7.35,
            zOffset: 0.77,
        },
        [WAITING_THOUGHT_SINGING]: {
            yIndex: 5,
            xPosition: 7.23,
            zOffset: 3.8,
        },
        [WAITING_THOUGHT_WALKING]: {
            yIndex: 5,
            xPosition: 3.37,
            zOffset: 3.4,
        },
    },
}
