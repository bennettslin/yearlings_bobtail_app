import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../constants/scene/actors'
import { CONCERNED } from '../../../constants/scene/actors/anita'
import { SNICKERING } from '../../../constants/scene/actors/esther'
import { FLUSTERED } from '../../../constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [FLUSTERED]: {
            yIndex: 4,
            xPosition: 9.4,
            zOffset: 0.57
        }
    },
    [ANITA]: {
        [CONCERNED]: {
            yIndex: 4,
            xPosition: 3
        }
    },
    [ESTHER]: {
        [SNICKERING]: {
            yIndex: 4,
            xPosition: 5.5
        }
    }
}
