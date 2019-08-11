import {
    BENNETT,
    MOTHER,
    FATHER,
    KHARI_LIZ,
    STEPHANIE
} from '../../../constants/scene/actors'
import { FUTURE } from '../../../constants/scene/actors/instances/songs'
import { JOKING_LAUGHING } from '../../../constants/scene/actors/instances/khariLiz'
import { BENNETT_RECORDING } from '../../../constants/scene/actors/instances/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [FUTURE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [MOTHER]: {
        [FUTURE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [FATHER]: {
        [FUTURE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [KHARI_LIZ]: {
        [JOKING_LAUGHING]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 2,
                zHeight: 3.5
            }
        }
    },
    [STEPHANIE]: {
        [BENNETT_RECORDING]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
