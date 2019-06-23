import {
    BUBBLE,
    CUTOUT
} from 'constants/scene'
import { GO_KART_THOUGHT } from '../../keys/bubbles'
import { TRAFFIC_LIGHT } from '../../keys/cutouts'

export const THINGS_LIZ_GATE_DATE_ENDED = {
    [BUBBLE]: {
        [GO_KART_THOUGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 3,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [CUTOUT]: {
        [TRAFFIC_LIGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 10,
                xWidth: 1,
                zHeight: 7
            }
        }
    }
}
