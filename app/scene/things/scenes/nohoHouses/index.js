import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { NOHO_HOUSES_BACKDROP } from 'constants/scene/things/backdrops'
import { FIRE_HYDRANT } from 'constants/scene/things/cutouts'
import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT
} from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [NOHO_HOUSES_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [FIRE_HYDRANT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 2
            }
        }
    },
    [FLAT]: {
        [NOHO_HOUSE_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2,
                xWidth: 5,
                zHeight: 3
            }
        },
        [NOHO_HOUSE_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
