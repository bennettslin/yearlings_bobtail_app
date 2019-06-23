import {
    BACKDROP,
    FLAT
} from 'constants/scene'
import { UCLA_BACKDROP } from '../../keys/backdrops'
import { ROYCE_HALL } from '../../keys/flats'

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
