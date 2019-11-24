import {
    BACKDROP,
    FLAT,
    PANEL
} from '../../../constants/scene/things'
import { DRIVING_BACKDROP } from '../../../constants/scene/things/backdrops'
import { GO_KART_TRACK } from '../../../constants/scene/things/flats'
import {
    GO_KART_SEAT__LEFT,
    GO_KART_SEAT__RIGHT,
    GO_KART_EXTERIOR__LEFT,
    GO_KART_EXTERIOR__RIGHT
} from '../../../constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [DRIVING_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [FLAT]: {
        [GO_KART_TRACK]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.66
        }
    },
    [PANEL]: {
        [GO_KART_SEAT__LEFT]: {
            yIndex: 3,
            xPosition: 2,
            zOffset: 0.75,
            scaleFactor: 0.4
        },
        [GO_KART_SEAT__RIGHT]: {
            yIndex: 3,
            xPosition: 8,
            zOffset: 0.75,
            scaleFactor: 0.4
        },
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
