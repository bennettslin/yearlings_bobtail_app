import {
    BENNETT_FATHER,
    MOTHER,
    MIRIAM_STEPHANIE
} from '../../../constants/scene/actors'
import { PRESENT } from '../../../constants/scene/actors/songs'
import { MISCHIEVOUS_BANJO } from '../../../constants/scene/actors/miriamStephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_FATHER]: {
        [PRESENT]: {
            yIndex: 1,
            xPosition: 5
        }
    },
    [MOTHER]: {
        [PRESENT]: {
            yIndex: 1,
            xPosition: 3
        }
    },
    [MIRIAM_STEPHANIE]: {
        [MISCHIEVOUS_BANJO]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
