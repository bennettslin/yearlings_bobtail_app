import {
    BUBBLE,
    CUTOUT
} from '../../../constants/scene'
import {
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    GO_KART_THOUGHT
} from '../../../constants/scene/things/bubbles'
import { TRAFFIC_LIGHT } from '../../../constants/scene/things/cutouts'
import { BUBBLE_SHARED } from '../../shared'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLE]: {
        [BUBBLE_SMALL__GO_KART]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: 4,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__GO_KART]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 3.75,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [GO_KART_THOUGHT]: {
            yIndex: 5,
            xPosition: 6,
            zOffset: 4,
            scaleFactor: 0.4
        }
    },
    [CUTOUT]: {
        [TRAFFIC_LIGHT]: {
            yIndex: 5,
            xPosition: 9.5,
            scaleFactor: 0.3
        }
    }
}
