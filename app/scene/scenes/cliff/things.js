import {
    CUTOUT,
    FLAT
} from 'constants/scene'
import { CLIFF_TREE } from 'constants/scene/things/cutouts'
import {
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR
} from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CLIFF_TREE]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [CLIFF_GRAVES_FAR]: {
            yIndex: 1,
            xPosition: 9.25,
            scaleFactor: 0.4
        },
        [CLIFF_GRAVES_NEAR]: {
            yIndex: 5,
            xPosition: 9,
            scaleFactor: 0.32
        }
    }
}

export default ARRANGEMENTS_THINGS
