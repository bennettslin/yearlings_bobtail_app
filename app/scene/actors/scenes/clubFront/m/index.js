import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER
} from 'constants/scene/actors'
import { FLIRTING } from 'constants/scene/actors/instances/songs'
import { SQUATTING } from 'constants/scene/actors/instances/ana'
import { DISTRACTED } from 'constants/scene/actors/instances/bennett'
import { SHANE_BUYING } from 'constants/scene/actors/instances/tomer'

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
