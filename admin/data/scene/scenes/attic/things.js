import {
    CUTOUT,
    FURNITURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION,
} from '../../../../../app/constants/scene/things/cutouts'
import { ATTIC_PILLOW } from '../../../../../app/constants/scene/things/furnitures'
import {
    ATTIC_COUCH,
    ATTIC_ARMREST__LEFT,
    ATTIC_ARMREST__RIGHT,
} from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [STORAGE_BOXES]: {
            yIndex: 1,
            xPosition: 6.5,
        },
        [STORAGE_CHEST]: {
            yIndex: 1,
            xPosition: 6.5,
        },
        [HOWIE_FRIDGE]: {
            yIndex: 1,
            xPosition: 9,
        },
        [TELEVISION]: {
            yIndex: 4,
            xPosition: 2,
            layerYIndex: 5,
        },
    },
    [FURNITURE]: {
        [ATTIC_PILLOW]: {
            yIndex: 2,
            xPosition: 5,
            layerYIndex: 3,
        },
    },
    [PANEL]: {
        [ATTIC_COUCH]: {
            yIndex: 2,
            xPosition: 3.5,
            scaleFactor: 0.25,
        },
        [ATTIC_ARMREST__LEFT]: {
            yIndex: 3,
            xPosition: 1.25,
            scaleFactor: 0.25,
            layerYIndex: 4,
        },
        [ATTIC_ARMREST__RIGHT]: {
            yIndex: 3,
            xPosition: 5.75,
            scaleFactor: 0.25,
            flipHorizontal: true,
        },
    },
}
