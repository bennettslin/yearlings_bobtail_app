import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER
} from '../../../../constants/scene/actors'
import { FLIRTING } from '../../../../constants/scene/actors/songs'
import { SQUATTING } from '../../../../constants/scene/actors/ana'
import { DISTRACTED } from '../../../../constants/scene/actors/bennett'
import { SHANE_BUYING } from '../../../../constants/scene/actors/tomer'

export default {
    [BENNETT]: {
        [DISTRACTED]: {
            yIndex: 4,
            xPosition: 4
        }
    },
    [MARA]: {
        [FLIRTING]: {
            yIndex: 4,
            xPosition: 4.5
        }
    },
    [JACOB]: {
        [FLIRTING]: {
            yIndex: 4,
            xPosition: 6.5
        }
    },
    [ANA]: {
        [SQUATTING]: {
            yIndex: 2,
            xPosition: 9
        }
    },
    [TOMER]: {
        [SHANE_BUYING]: {
            yIndex: 4,
            xPosition: 2
        }
    }
}
