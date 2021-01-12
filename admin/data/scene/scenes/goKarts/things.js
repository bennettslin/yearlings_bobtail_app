import {
    FLAT,
    PANEL,
} from '../../../../../app/constants/scene/things'
import { GO_KART_TRACK } from '../../../../../app/constants/scene/things/flats'
import {
    GO_KART_SEAT__LEFT,
    GO_KART_SEAT__RIGHT,
    GO_KART_EXTERIOR__LEFT,
    GO_KART_EXTERIOR__RIGHT,
} from '../../../../../app/constants/scene/things/panels'

export default {
    [FLAT]: {
        [GO_KART_TRACK]: {
            yIndex: 1,
        },
    },
    [PANEL]: {
        [GO_KART_SEAT__LEFT]: {
            yIndex: 3,
            xPosition: 1.6,
            zOffset: 0.75,
        },
        [GO_KART_SEAT__RIGHT]: {
            yIndex: 3,
            xPosition: 7.9,
            zOffset: 0.75,
        },
        [GO_KART_EXTERIOR__LEFT]: {
            yIndex: 3,
            xPosition: 2.4,
        },
        [GO_KART_EXTERIOR__RIGHT]: {
            yIndex: 3,
            xPosition: 8.4,
        },
    },
}
