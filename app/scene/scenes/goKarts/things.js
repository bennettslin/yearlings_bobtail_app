import {
    BACKDROP,
    FLAT,
    PANEL
} from 'constants/scene'
import { GO_KART_BACKDROP } from 'constants/scene/things/backdrops'
import { GO_KART_TRACK } from 'constants/scene/things/flats'
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
    [FLAT]: {
        [GO_KART_TRACK]: {
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
            xPosition: 2.5,
            scaleFactor: 0.32
        },
        [GO_KART_EXTERIOR__RIGHT]: {
            yIndex: 3,
            xPosition: 8.5,
            scaleFactor: 0.32
        }
    }
}

export default ARRANGEMENTS_THINGS
