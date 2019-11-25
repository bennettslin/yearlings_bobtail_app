import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../constants/scene/actors'
import { CONCERNED } from '../../../constants/scene/actors/anita'
import { SNICKERING } from '../../../constants/scene/actors/esther'
import { FLUSTERED } from '../../../constants/scene/actors/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [FLUSTERED]: {
            yIndex: 4,
            xPosition: 9.5
        }
    },
    [ANITA]: {
        [CONCERNED]: {
            yIndex: 3,
            xPosition: 2
        }
    },
    [ESTHER]: {
        [SNICKERING]: {
            yIndex: 4,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
