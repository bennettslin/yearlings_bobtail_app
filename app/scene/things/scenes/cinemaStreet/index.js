import {
    BUBBLES,
    CUTOUTS
} from 'constants/scene'
import { CINEMA_THOUGHTS } from '../../keys/bubbles'
import { CINEMA_POSTER_RIGHT_NORMAL } from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [BUBBLES]: {
        [CINEMA_THOUGHTS]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        }
    },
    [CUTOUTS]: {
        [CINEMA_POSTER_RIGHT_NORMAL]: {
            yIndex: 4,
            arrangement: {
                xFloat: 1,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
