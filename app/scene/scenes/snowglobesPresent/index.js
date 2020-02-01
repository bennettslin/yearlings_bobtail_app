import {
    BENNETT_FATHER,
    MOTHER,
    MIRIAM_STEPHANIE
} from '../../../constants/scene/actors'
import { PRESENT } from '../../../constants/scene/actors/songs'
import { MISCHIEVOUS_BANJO } from '../../../constants/scene/actors/miriamStephanie'

export default {
    [BENNETT_FATHER]: {
        [PRESENT]: {
            yIndex: 1,
            xPosition: 5.5,
            zOffset: 3
        }
    },
    [MOTHER]: {
        [PRESENT]: {
            yIndex: 1,
            xPosition: 3,
            zOffset: 3.5
        }
    },
    [MIRIAM_STEPHANIE]: {
        [MISCHIEVOUS_BANJO]: {
            yIndex: 4,
            xPosition: 8,
            zOffset: -1
        }
    }
}
