import {
    BENNETT_FATHER,
    LIZ,
    MOTHER,
    MIRIAM_STEPHANIE
} from '../../../../../app/constants/scene/actors'
import { PRESENT } from '../../../../../app/constants/scene/actors/songs'
import { PETTING_SEATED_PRESENT } from '../../../../../app/constants/scene/actors/liz'
import { MISCHIEVOUS_BANJO } from '../../../../../app/constants/scene/actors/miriamStephanie'

export default {
    [MOTHER]: {
        [PRESENT]: {
            yIndex: 0,
            xPosition: 3.2,
            zOffset: 0.9
        }
    },
    [BENNETT_FATHER]: {
        [PRESENT]: {
            yIndex: 0,
            xPosition: 5.9,
            zOffset: -1
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
