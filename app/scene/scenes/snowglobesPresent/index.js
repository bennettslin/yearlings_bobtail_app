import {
    BENNETT_FATHER,
    MOTHER,
    MIRIAM_STEPHANIE
} from '../../../constants/scene/actors'
import { PRESENT } from '../../../constants/scene/actors/instances/songs'
import { MISCHIEVOUS_BANJO } from '../../../constants/scene/actors/instances/miriamStephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_FATHER]: {
        [PRESENT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [MOTHER]: {
        [PRESENT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 3,
                xWidth: 1,
                zHeight: 5,
                zOffset: 1.5
            }
        }
    },
    [MIRIAM_STEPHANIE]: {
        [MISCHIEVOUS_BANJO]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
