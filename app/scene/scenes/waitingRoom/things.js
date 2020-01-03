import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    PANEL
} from '../../../constants/scene/things'
import {
    BUBBLE_SMALL__WAITING,
    BUBBLE_MEDIUM__WAITING,
    BUBBLE_LARGE__WAITING,
    WAITING_THOUGHT_WALKING,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING
} from '../../../constants/scene/things/bubbles'
import {
    CLIPBOARD,
    PAINTING
} from '../../../constants/scene/things/cardboards'
import { WAITING_ROOM_PLANT } from '../../../constants/scene/things/cutouts'
import {
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN
} from '../../../constants/scene/things/doors'
import {
    WAITING_ARMCHAIR__BENNETT,
    WAITING_ARMREST__BENNETT_LEFT,
    WAITING_ARMREST__BENNETT_RIGHT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_ARMREST__LIZ_LEFT,
    WAITING_ARMREST__LIZ_RIGHT
} from '../../../constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [CLIPBOARD]: {
            yIndex: 2,
            xPosition: 9.5,
            zOffset: 2,
            scaleFactor: 0.45
        },
        [PAINTING]: {
            yIndex: 2,
            xPosition: 4,
            scaleFactor: 0.5,
            zOffset: 4
        }
    },
    [CUTOUT]: {
        [WAITING_ROOM_PLANT]: {
            yIndex: 3,
            xPosition: 7.5,
            scaleFactor: 0.45
        }
    },
    [DOOR]: {
        [WAITING_ROOM_DOOR]: {
            yIndex: 5,
            xPosition: 10.16
        },
        [WAITING_ROOM_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.81
        }
    },
    [PANEL]: {
        [WAITING_ARMCHAIR__BENNETT]: {
            yIndex: 3,
            xPosition: 2.5,
            scaleFactor: 0.3
        },
        [WAITING_ARMREST__BENNETT_LEFT]: {
            yIndex: 5,
            xPosition: 1.3,
            scaleFactor: 0.22
        },
        [WAITING_ARMREST__BENNETT_RIGHT]: {
            yIndex: 5,
            xPosition: 3.7,
            scaleFactor: 0.22,
            flipHorizontal: true
        },
        [WAITING_ARMCHAIR__LIZ]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.3,
            flipHorizontal: true
        },
        [WAITING_ARMREST__LIZ_LEFT]: {
            yIndex: 5,
            xPosition: 4.3,
            scaleFactor: 0.22
        },
        [WAITING_ARMREST__LIZ_RIGHT]: {
            yIndex: 5,
            xPosition: 6.7,
            scaleFactor: 0.22,
            flipHorizontal: true
        }
    }
}

export const THINGS_WAITING_ROOM_ASLEEP = {
    [BUBBLE]: {
        [BUBBLE_SMALL__WAITING]: {
            yIndex: 5,
            xPosition: 1,
            zOffset: 3.2,
            scaleFactor: 0.4
        },
        [BUBBLE_MEDIUM__WAITING]: {
            yIndex: 5,
            xPosition: 0.75,
            zOffset: 3.5,
            scaleFactor: 0.4
        },
        [BUBBLE_LARGE__WAITING]: {
            yIndex: 5,
            xPosition: 1.1,
            zOffset: 4,
            scaleFactor: 0.4
        },
        [WAITING_THOUGHT_WALKING]: {
            yIndex: 5,
            xPosition: 3.6,
            zOffset: 3.3,
            scaleFactor: 0.45
        },
        [WAITING_THOUGHT_SINGING]: {
            yIndex: 5,
            xPosition: 7.7,
            zOffset: 3.6,
            scaleFactor: 0.45
        },
        [WAITING_THOUGHT_STUDYING]: {
            yIndex: 5,
            xPosition: 8.5,
            zOffset: 0.6,
            scaleFactor: 0.45
        }
    }
}
