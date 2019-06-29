import {
    BACKDROP,
    PANEL
} from 'constants/scene'
import { GO_KART_BACKDROP } from 'constants/scene/things/backdrops'
import {
    GO_KART_EXTERIOR__LEFT,
    GO_KART_EXTERIOR__RIGHT
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [GO_KART_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANEL]: {
        [GO_KART_EXTERIOR__LEFT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2.5,
                xWidth: 5,
                zHeight: 2
            }
        },
        [GO_KART_EXTERIOR__RIGHT]: {
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
