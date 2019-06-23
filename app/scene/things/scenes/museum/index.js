import {
    FIXTURE,
    FLAT
} from 'constants/scene'
import { CAVEMAN_BONES } from '../../keys/fixtures'
import { MUSEUM_DISPLAY } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [CAVEMAN_BONES]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8.5,
                xWidth: 1.5,
                zHeight: 4
            }
        }
    },
    [FLAT]: {
        [MUSEUM_DISPLAY]: {
            yIndex: 1,
            arrangement: {
                xPosition: 4.5,
                xWidth: 6,
                zHeight: 6
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
