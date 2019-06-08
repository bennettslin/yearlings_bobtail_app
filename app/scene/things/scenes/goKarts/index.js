import {
    BACKDROPS,
    PANELS
} from 'constants/scene'
import { GO_KART_BACKDROP } from '../../keys/backdrops'
import {
    GO_KART_EXTERIOR_LEFT,
    GO_KART_EXTERIOR_RIGHT
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [GO_KART_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANELS]: {
        [GO_KART_EXTERIOR_LEFT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2.5,
                xWidth: 5,
                zHeight: 2
            }
        },
        [GO_KART_EXTERIOR_RIGHT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8.5,
                xWidth: 5,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
