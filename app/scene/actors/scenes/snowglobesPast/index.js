import {
    BENNETT,
    FATHER,
    SASHA_BENNETT
} from '../../keys'
import { PAST } from '../../keys/instances/songs'
import { COMFORTING_HUMILIATED } from '../../keys/instances/sashaBennett'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [PAST]: {
            yIndex: 1,
            arrangement: {
                xFloat: 1.5,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [FATHER]: {
        [PAST]: {
            yIndex: 1,
            arrangement: {
                xFloat: 3,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [SASHA_BENNETT]: {
        [COMFORTING_HUMILIATED]: {
            yIndex: 2,
            arrangement: {
                xFloat: 8,
                xWidth: 1,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
