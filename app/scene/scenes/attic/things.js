import {
    CUTOUT,
    PANEL
} from 'constants/scene'
import {
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION
} from 'constants/scene/things/cutouts'
import {
    ATTIC_COUCH,
    ATTIC_LEFT_ARMREST,
    ATTIC_RIGHT_ARMREST
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [STORAGE_BOXES]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 2,
                zHeight: 3
            }
        },
        [STORAGE_CHEST]: {
            yIndex: 4,
            arrangement: {
                xPosition: 1.5,
                xWidth: 1,
                zHeight: 1.5
            }
        },
        [HOWIE_FRIDGE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2.5,
                zHeight: 5
            }
        },
        [TELEVISION]: {
            yIndex: 4,
            xPosition: 3.5,
            scaleFactor: 0.3
        }
    },
    [PANEL]: {
        [ATTIC_COUCH]: {
            yIndex: 3,
            arrangement: {
                xPosition: 3.5,
                xWidth: 4,
                zHeight: 0.5
            }
        },
        [ATTIC_LEFT_ARMREST]: {
            yIndex: 3,
            arrangement: {
                xPosition: 3.5,
                xWidth: 4,
                zHeight: 0.5
            }
        },
        [ATTIC_RIGHT_ARMREST]: {
            yIndex: 3,
            arrangement: {
                xPosition: 3.5,
                xWidth: 4,
                zHeight: 0.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
