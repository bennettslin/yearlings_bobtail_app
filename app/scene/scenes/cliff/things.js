import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { CLIFF_TREE } from '../../../constants/scene/things/cutouts'
import {
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR
} from '../../../constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [CLIFF_TREE]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [CLIFF_GRAVES_FAR]: {
            yIndex: 1,
            xPosition: 12.25,
            scaleFactor: 0.48,
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
