import {
    BENNETT,
    ANA,
    TRISTAN,
    NESTOR,
} from '../../../../../../app/constants/scene/actors'
import { CHUCKLING } from '../../../../../../app/constants/scene/actors/ana'
import { DROPPING_MEATS } from '../../../../../../app/constants/scene/actors/bennett'
import { INJURED } from '../../../../../../app/constants/scene/actors/nestor'
import { PUNCHING } from '../../../../../../app/constants/scene/actors/tristan'

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
