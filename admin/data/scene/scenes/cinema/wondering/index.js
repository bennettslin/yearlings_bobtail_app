import {
    BENNETT,
    HOWIE,
    MIRIAM,
} from '../../../../../../src/constants/scene/actors'
import { WONDERING_BABY } from '../../../../../../src/constants/scene/actors/bennett'
import { USHER_WAITING } from '../../../../../../src/constants/scene/actors/howie'
import { INFANT_NURSING } from '../../../../../../src/constants/scene/actors/miriam'

export default {
    [BENNETT]: {
        [WONDERING_BABY]: {
            yIndex: 5,
            xPosition: 7,
        },
    },
    [HOWIE]: {
        [USHER_WAITING]: {
            yIndex: 5,
            xPosition: 10,
        },
    },
    [MIRIAM]: {
        [INFANT_NURSING]: {
            yIndex: 5,
            xPosition: 2.5,
        },
    },
}
