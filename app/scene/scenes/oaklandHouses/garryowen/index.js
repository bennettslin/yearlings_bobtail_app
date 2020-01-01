import {
    BENNETT,
    ANA,
    TRISTAN,
    NESTOR
} from 'constants/scene/actors'
import { CHUCKLING } from 'constants/scene/actors/ana'
import { DROPPING_MEATS } from 'constants/scene/actors/bennett'
import { INJURED } from 'constants/scene/actors/nestor'
import { PUNCHING } from 'constants/scene/actors/tristan'

export default {
    [BENNETT]: {
        [DROPPING_MEATS]: {
            yIndex: 5,
            xPosition: 2
        }
    },
    [ANA]: {
        [CHUCKLING]: {
            yIndex: 5,
            xPosition: 4
        }
    },
    [TRISTAN]: {
        [PUNCHING]: {
            yIndex: 5,
            xPosition: 7
        }
    },
    [NESTOR]: {
        [INJURED]: {
            yIndex: 5,
            xPosition: 9
        }
    }
}
