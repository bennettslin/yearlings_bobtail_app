import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../keys'
import { CONCERNED } from '../../keys/instances/anita'
import { SNICKERING } from '../../keys/instances/esther'
import { FLUSTERED } from '../../keys/instances/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [FLUSTERED]: {
            yIndex: 4,
            arrangement: {
                xFloat: 8.5,
                xWidth: 1.5,
                zHeight: 2.5,
                zOffset: -2
            }
        }
    },
    [ANITA]: {
        [CONCERNED]: {
            yIndex: 3,
            arrangement: {
                xFloat: 2,
                xWidth: 1,
                zHeight: 3.75
            }
        }
    },
    [ESTHER]: {
        [SNICKERING]: {
            yIndex: 4,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 3.83
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
