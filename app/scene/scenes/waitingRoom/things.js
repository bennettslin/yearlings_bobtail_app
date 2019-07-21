import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    PANEL
} from 'constants/scene'
import { WAITING_ROOM_THOUGHTS } from 'constants/scene/things/bubbles'
import {
    CLIPBOARD,
    PAINTING
} from 'constants/scene/things/cardboards'
import { WAITING_ROOM_PLANT } from 'constants/scene/things/cutouts'
import {
    WAITING_ARMCHAIR__BENNETT,
    WAITING_ARMREST__BENNETT_LEFT,
    WAITING_ARMREST__BENNETT_RIGHT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_ARMREST__LIZ_LEFT,
    WAITING_ARMREST__LIZ_RIGHT
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
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
    [PANEL]: {
        [WAITING_ARMCHAIR__BENNETT]: {
            yIndex: 3,
            xPosition: 2.5,
            scaleFactor: 0.22
        },
        [WAITING_ARMREST__BENNETT_LEFT]: {
            yIndex: 5,
            xPosition: 1.25,
            scaleFactor: 0.22
        },
        [WAITING_ARMREST__BENNETT_RIGHT]: {
            yIndex: 5,
            xPosition: 3.75,
            scaleFactor: 0.22,
            flipHorizontal: true
        },
        [WAITING_ARMCHAIR__LIZ]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.22,
            flipHorizontal: true
        },
        [WAITING_ARMREST__LIZ_LEFT]: {
            yIndex: 5,
            xPosition: 4.25,
            scaleFactor: 0.22
        },
        [WAITING_ARMREST__LIZ_RIGHT]: {
            yIndex: 5,
            xPosition: 6.75,
            scaleFactor: 0.22,
            flipHorizontal: true
        }
    }
}

export const THINGS_WAITING_ROOM_ASLEEP = {
    [BUBBLE]: {
        [WAITING_ROOM_THOUGHTS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
