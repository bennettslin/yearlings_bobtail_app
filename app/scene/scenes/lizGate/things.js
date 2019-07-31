import {
    BUBBLE,
    CUTOUT
} from 'constants/scene'
import { GO_KART_THOUGHT } from 'constants/scene/things/bubbles'
import { TRAFFIC_LIGHT } from 'constants/scene/things/cutouts'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLE]: {
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
