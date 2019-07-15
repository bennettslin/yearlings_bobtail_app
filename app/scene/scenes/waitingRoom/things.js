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
    WAITING_LEFT_ARMREST__BENNETT,
    WAITING_RIGHT_ARMREST__BENNETT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_LEFT_ARMREST__LIZ,
    WAITING_RIGHT_ARMREST__LIZ
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [CLIPBOARD]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 2,
                zOffset: 2
            }
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
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_LEFT_ARMREST__BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_RIGHT_ARMREST__BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR__LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_LEFT_ARMREST__LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_RIGHT_ARMREST__LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
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
