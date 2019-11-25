import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from 'constants/scene/actors'
import { EXASPERATED } from 'constants/scene/actors/anita'
import { CURIOUS } from 'constants/scene/actors/esther'
import { PANICKED } from 'constants/scene/actors/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [PANICKED]: {
            yIndex: 5,
            xPosition: 9
        }
    },
    [ANITA]: {
        [EXASPERATED]: {
            yIndex: 5,
            xPosition: 5
        }
    },
    [ESTHER]: {
        [CURIOUS]: {
            yIndex: 4,
            xPosition: 3.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
