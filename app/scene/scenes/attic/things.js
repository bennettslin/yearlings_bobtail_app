import {
    CUTOUT,
    PANEL
} from '../../../constants/scene/things'
import {
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION
} from '../../../constants/scene/things/cutouts'
import {
    ATTIC_COUCH,
    ATTIC_ARMREST__LEFT,
    ATTIC_ARMREST__RIGHT
} from '../../../constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [STORAGE_BOXES]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.2
        },
        [STORAGE_CHEST]: {
            yIndex: 4,
            xPosition: 1.5,
            scaleFactor: 0.2
        },
        [HOWIE_FRIDGE]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.35
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
            xPosition: 3.5,
            scaleFactor: 0.25
        },
        [ATTIC_ARMREST__LEFT]: {
            yIndex: 3,
            xPosition: 1,
            scaleFactor: 0.25
        },
        [ATTIC_ARMREST__RIGHT]: {
            yIndex: 3,
            xPosition: 6,
            scaleFactor: 0.25,
            flipHorizontal: true
        }
    }
}

export default ARRANGEMENTS_THINGS
