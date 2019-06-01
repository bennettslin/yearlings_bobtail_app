import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../keys'
import { EXASPERATED } from '../../../keys/instances/anita'
import { CURIOUS } from '../../../keys/instances/esther'
import { PANICKED } from '../../../keys/instances/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [PANICKED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 3.5
            }
        }
    },
    [ANITA]: {
        [EXASPERATED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 3.75
            }
        }
    },
    [ESTHER]: {
        [CURIOUS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1,
                zHeight: 3.83
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
