import {
    CARDBOARDS,
    FIXTURES
} from 'constants/scene'
import { ELLIOTT_SMITH_POSTER } from '../../keys/cardboards'
import { NAS_ALBUM } from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [CARDBOARDS]: {
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
        }
    },
    [FIXTURES]: {
        [NAS_ALBUM]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
