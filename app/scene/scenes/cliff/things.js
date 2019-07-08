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
            xPosition: 12,
            zOffset: 0.5,
            scaleFactor: 0.45,
            alignRight: true
        },
        [CLIFF_GRAVES_NEAR]: {
            yIndex: 4,
            xPosition: 11.5,
            scaleFactor: 0.4,
            alignRight: true
        }
    }
}

export default ARRANGEMENTS_THINGS
