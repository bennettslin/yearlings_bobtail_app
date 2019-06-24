import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from 'constants/scene/actors'
import { EXASPERATED } from 'constants/scene/actors/instances/anita'
import { CURIOUS } from 'constants/scene/actors/instances/esther'
import { PANICKED } from 'constants/scene/actors/instances/youngBennett'

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
