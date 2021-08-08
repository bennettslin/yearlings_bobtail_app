import {
    BENNETT,
    ANA,
    TRISTAN,
    NESTOR,
} from '../../../../../../src/constants/scene/actors'
import { CHUCKLING } from '../../../../../../src/constants/scene/actors/ana'
import { DROPPING_MEATS } from '../../../../../../src/constants/scene/actors/bennett'
import { INJURED } from '../../../../../../src/constants/scene/actors/nestor'
import { PUNCHING } from '../../../../../../src/constants/scene/actors/tristan'

export default {
    [BENNETT]: {
        [DROPPING_MEATS]: {
            yIndex: 5,
            xPosition: 1.5,
        },
    },
    [ANA]: {
        [CHUCKLING]: {
            yIndex: 5,
            xPosition: 3.8,
        },
    },
    [TRISTAN]: {
        [PUNCHING]: {
            yIndex: 5,
            xPosition: 5.9,
        },
    },
    [NESTOR]: {
        [INJURED]: {
            yIndex: 5,
            xPosition: 9.5,
        },
    },
}
