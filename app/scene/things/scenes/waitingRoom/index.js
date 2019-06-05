import {
    BUBBLES,
    CUTOUTS,
    PANELS
} from 'constants/scene'
import { WAITING_ROOM_THOUGHTS } from '../../keys/bubbles'
import {
    CLIPBOARD,
    PAINTING,
    WAITING_ROOM_PLANT
} from '../../keys/cutouts'
import {
    WAITING_ARMCHAIR_PANEL_BENNETT,
    WAITING_ARMCHAIR_ARMREST_LEFT_BENNETT,
    WAITING_ARMCHAIR_ARMREST_RIGHT_BENNETT,
    WAITING_ARMCHAIR_PANEL_LIZ,
    WAITING_ARMCHAIR_ARMREST_LEFT_LIZ,
    WAITING_ARMCHAIR_ARMREST_RIGHT_LIZ
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
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
        },
        [WAITING_ROOM_PLANT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 4
            }
        }
    },
    [PANELS]: {
        [WAITING_ARMCHAIR_PANEL_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR_ARMREST_LEFT_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR_ARMREST_RIGHT_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR_PANEL_LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR_ARMREST_LEFT_LIZ]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [WAITING_ARMCHAIR_ARMREST_RIGHT_LIZ]: {
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
    [BUBBLES]: {
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
