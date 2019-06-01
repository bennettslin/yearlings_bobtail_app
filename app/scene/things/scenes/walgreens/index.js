import {
    BACKDROPS,
    FLATS
} from 'constants/scene'
import { PHARMACY_THOUGHT_BACKDROP } from '../../keys/backdrops'
import { PHARMACY_AISLE } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [PHARMACY_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 6
            }
        }
    },
    [FLATS]: {
        [PHARMACY_AISLE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 8,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
