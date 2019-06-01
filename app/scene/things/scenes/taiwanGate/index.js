import {
    BACKDROPS,
    CUTOUTS,
    FLATS
} from 'constants/scene'
import { TAIWAN_STREETS_BACKDROP } from '../../keys/backdrops'
import { BENNETT_ODIN_RICKSHAW } from '../../keys/cutouts'
import {
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [TAIWAN_STREETS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 7,
                xWidth: 9,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [BENNETT_ODIN_RICKSHAW]: {
            yIndex: 2,
            arrangement: {
                xPosition: 7,
                xWidth: 2.5,
                zHeight: 4
            }
        }
    },
    [FLATS]: {
        [TAIWAN_HOUSE_FAR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 10,
                xWidth: 3,
                zHeight: 4
            }
        },
        [TAIWAN_HOUSE_NEAR]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10.5,
                xWidth: 2,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
