import {
    CARDBOARD
} from 'constants/scene'
import {
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT
} from '../../keys/cardboards'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [CINEMA_POSTER_LEFT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 1,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        },
        [CINEMA_POSTER_RIGHT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 10,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
