import {
    BENNETT_FATHER,
    LIZ,
    MOTHER,
    MIRIAM_STEPHANIE
} from '../../../constants/scene/actors'
import { PRESENT } from '../../../constants/scene/actors/songs'
import { PETTING_SEATED_PRESENT } from '../../../constants/scene/actors/liz'
import { MISCHIEVOUS_BANJO } from '../../../constants/scene/actors/miriamStephanie'

export default {
    [MOTHER]: {
        [PRESENT]: {
            xPosition: 3,
            zOffset: 3.5
        }
    },
    [BENNETT_FATHER]: {
        [PRESENT]: {
            xPosition: 5.9,
            zOffset: 3
        }
    },
    [LIZ]: {
        [PETTING_SEATED_PRESENT]: {
            yIndex: 1,
            xPosition: 3.35,
            zOffset: -0.95
        }
    },
    [MIRIAM_STEPHANIE]: {
        [MISCHIEVOUS_BANJO]: {
            yIndex: 2,
            xPosition: 8.45,
            zOffset: -1.15,
            layerYIndex: 3
        }
    }
}
