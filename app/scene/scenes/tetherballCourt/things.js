import {
    BACKDROP,
    FIXTURE,
    FLAT
} from 'constants/scene'
import { VAN_NUYS_THOUGHT_BACKDROP } from 'constants/scene/things/backdrops'
import { TETHERBALL_POLE } from 'constants/scene/things/fixtures'
import {
    VAN_NUYS_SCHOOLHOUSE_LEFT,
    VAN_NUYS_SCHOOLHOUSE_RIGHT
} from 'constants/scene/things/flats'
import { VAN_NUYS_SCHOOLHOUSE_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [VAN_NUYS_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        }
    },
    [FIXTURE]: {
        [TETHERBALL_POLE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 0.5,
                zHeight: 6
            }
        }
    },
    [FLAT]: {
        [VAN_NUYS_SCHOOLHOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2.5,
            scaleFactor: 0.5,
            sharedStyle: VAN_NUYS_SCHOOLHOUSE_SHARED
        },
        [VAN_NUYS_SCHOOLHOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 8.5,
            scaleFactor: 0.5,
            sharedStyle: VAN_NUYS_SCHOOLHOUSE_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
