import {
    BUBBLES,
    CUTOUTS
} from 'constants/scene'
import { GO_KART_THOUGHT } from '../../keys/bubbles'
import { TRAFFIC_LIGHT } from '../../keys/cutouts'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLES]: {
        [GO_KART_THOUGHT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 3,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [CUTOUTS]: {
        [TRAFFIC_LIGHT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 10,
                xWidth: 1,
                zHeight: 7
            }
        }
    }
}
