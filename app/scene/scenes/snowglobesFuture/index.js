import {
    BENNETT,
    MOTHER,
    FATHER,
    KHARI_LIZ,
    STEPHANIE
} from '../../../constants/scene/actors'
import { FUTURE } from '../../../constants/scene/actors/songs'
import { JOKING_LAUGHING } from '../../../constants/scene/actors/khariLiz'
import { BENNETT_RECORDING } from '../../../constants/scene/actors/stephanie'

export default {
    [BENNETT]: {
        [FUTURE]: {
            yIndex: 1,
            xPosition: 5,
            zOffset: 3
        }
    },
    [MOTHER]: {
        [FUTURE]: {
            yIndex: 1,
            xPosition: 8,
            zOffset: 3
        }
    },
    [FATHER]: {
        [FUTURE]: {
            yIndex: 1,
            xPosition: 4,
            zOffset: 3
        }
    },
    [KHARI_LIZ]: {
        [JOKING_LAUGHING]: {
            yIndex: 2,
            xPosition: 3
        }
    },
    [STEPHANIE]: {
        [BENNETT_RECORDING]: {
            yIndex: 3,
            xPosition: 8.5
        }
    }
}
