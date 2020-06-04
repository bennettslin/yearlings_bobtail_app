import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER
} from '../../../../../../app/constants/scene/actors'
import { FLIRTING } from '../../../../../../app/constants/scene/actors/songs'
import { SQUATTING } from '../../../../../../app/constants/scene/actors/ana'
import { DISTRACTED } from '../../../../../../app/constants/scene/actors/bennett'
import { SHANE_BUYING } from '../../../../../../app/constants/scene/actors/tomer'

export default {
    [TOMER]: {
        [SHANE_BUYING]: {
            yIndex: 5,
            xPosition: 1.3,
            zOffset: -0.07
        }
    },
    [BENNETT]: {
        [DISTRACTED]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: -0.06
        }
    },
    [ANA]: {
        [SQUATTING]: {
            yIndex: 2,
            xPosition: 5.9,
            zOffset: -0.25,
            layerYIndex: 4
        }
    },
    [MARA]: {
        [FLIRTING]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: -0.06
        }
    },
    [JACOB]: {
        [FLIRTING]: {
            yIndex: 5,
            xPosition: 9,
            zOffset: -0.07
        }
    }
}
