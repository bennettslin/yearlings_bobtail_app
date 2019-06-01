import {
    BENNETT,
    LIZ,
    NESTOR
} from '../../../keys'
import { GATE_CODE } from '../../../keys/instances/songs'
import { JOGGER } from '../../../keys/instances/nestor'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [GATE_CODE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [LIZ]: {
        [GATE_CODE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [NESTOR]: {
        [JOGGER]: {
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
