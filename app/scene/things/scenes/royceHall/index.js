import {
    BACKDROP,
    FLAT
} from 'constants/scene'
import { UCLA_BACKDROP } from 'constants/scene/things/backdrops'
import { ROYCE_HALL } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [UCLA_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [FLAT]: {
        [ROYCE_HALL]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
