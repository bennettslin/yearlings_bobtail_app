import {
    BENNETT,
    MOTHER,
    FATHER,
    KHARI_LIZ,
    STEPHANIE
} from '../../../../../app/constants/scene/actors'
import { FUTURE } from '../../../../../app/constants/scene/actors/songs'
import { JOKING_LAUGHING } from '../../../../../app/constants/scene/actors/khariLiz'
import { BENNETT_RECORDING } from '../../../../../app/constants/scene/actors/stephanie'

export default {
    [FATHER]: {
        [FUTURE]: {
            yIndex: 0,
            xPosition: 4.3,
            zOffset: 1.25
        }
    },
    [BENNETT]: {
        [FUTURE]: {
            yIndex: 0,
            xPosition: 6,
            zOffset: 3
        }
    },
    [MOTHER]: {
        [FUTURE]: {
            yIndex: 0,
            xPosition: 8,
            zOffset: 3.4
        }
    },
    [KHARI_LIZ]: {
        [JOKING_LAUGHING]: {
            yIndex: 2,
            xPosition: 3.8,
            zOffset: 0
        }
    },
    [STEPHANIE]: {
        [BENNETT_RECORDING]: {
            yIndex: 2,
            xPosition: 8.5
        }
    }
}
