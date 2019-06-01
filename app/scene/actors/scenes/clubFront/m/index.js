import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER
} from '../../../keys'
import { FLIRTING } from '../../../keys/instances/songs'
import { SQUATTING } from '../../../keys/instances/ana'
import { DISTRACTED } from '../../../keys/instances/bennett'
import { SHANE_BUYING } from '../../../keys/instances/tomer'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [DISTRACTED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MARA]: {
        [FLIRTING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [JACOB]: {
        [FLIRTING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANA]: {
        [SQUATTING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TOMER]: {
        [SHANE_BUYING]: {
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
