import {
    BACKDROPS,
    PANELS
} from 'constants/scene'
import { GO_KART_BACKDROP } from '../../keys/backdrops'
import {
    GO_KART_LEFT_EXTERIOR,
    GO_KART_RIGHT_EXTERIOR
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [GO_KART_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANELS]: {
        [GO_KART_LEFT_EXTERIOR]: {
            yIndex: 3,
            arrangement: {
                xFloat: 2.5,
                xWidth: 5,
                zHeight: 2
            }
        },
        [GO_KART_RIGHT_EXTERIOR]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8.5,
                xWidth: 5,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
