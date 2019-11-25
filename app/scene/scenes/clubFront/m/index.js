import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER
} from 'constants/scene/actors'
import { FLIRTING } from 'constants/scene/actors/songs'
import { SQUATTING } from 'constants/scene/actors/ana'
import { DISTRACTED } from 'constants/scene/actors/bennett'
import { SHANE_BUYING } from 'constants/scene/actors/tomer'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [DISTRACTED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MARA]: {
        [FLIRTING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [JACOB]: {
        [FLIRTING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [ANA]: {
        [SQUATTING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [TOMER]: {
        [SHANE_BUYING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
