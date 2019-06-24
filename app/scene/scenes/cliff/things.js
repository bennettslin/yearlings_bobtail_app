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
            arrangement: {
                xPosition: 2,
                xWidth: 6,
                zHeight: 6
            }
        }
    },
    [FLAT]: {
        [CLIFF_GRAVES_FAR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 2
            }
        },
        [CLIFF_GRAVES_NEAR]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
