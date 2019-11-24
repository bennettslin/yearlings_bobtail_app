import {
    BENNETT,
    LIZ,
    NESTOR
} from 'constants/scene/actors'
import { GATE_CODE } from 'constants/scene/actors/instances/songs'
import { JOGGER } from 'constants/scene/actors/instances/nestor'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [GATE_CODE]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [LIZ]: {
        [GATE_CODE]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [NESTOR]: {
        [JOGGER]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
