import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    PANEL
} from 'constants/scene'
import { WAITING_ROOM_THOUGHTS } from '../../keys/bubbles'
import {
    CLIPBOARD,
    PAINTING
} from '../../keys/cardboards'
import { WAITING_ROOM_PLANT } from '../../keys/cutouts'
import {
    WAITING_ARMCHAIR_BENNETT,
    WAITING_LEFT_ARMREST_BENNETT,
    WAITING_RIGHT_ARMREST_BENNETT,
    WAITING_ARMCHAIR_LIZ,
    WAITING_LEFT_ARMREST_LIZ,
    WAITING_RIGHT_ARMREST_LIZ
} from '../../keys/panels'

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
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        }
    },
    [CUTOUT]: {
        [WAITING_ROOM_PLANT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 4
            }
        }
    },
    [PANEL]: {
        [WAITING_ARMCHAIR_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_LEFT_ARMREST_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_RIGHT_ARMREST_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR_LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_LEFT_ARMREST_LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_RIGHT_ARMREST_LIZ]: {
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
