import {
    BACKDROPS,
    FIXTURES,
    FLATS
} from 'constants/scene'
import { VAN_NUYS_THOUGHT_BACKDROP } from '../../keys/backdrops'
import { TETHERBALL_POLE } from '../../keys/fixtures'
import {
    VAN_NUYS_SCHOOLHOUSE_LEFT,
    VAN_NUYS_SCHOOLHOUSE_RIGHT
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [VAN_NUYS_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        }
    },
    [FIXTURES]: {
        [TETHERBALL_POLE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 0.5,
                zHeight: 6
            }
        }
    },
    [FLATS]: {
        [VAN_NUYS_SCHOOLHOUSE_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 3
            }
        },
        [VAN_NUYS_SCHOOLHOUSE_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
