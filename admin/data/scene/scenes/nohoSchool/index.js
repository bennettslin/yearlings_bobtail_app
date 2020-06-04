import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../../../app/constants/scene/actors'
import { CONCERNED } from '../../../../../app/constants/scene/actors/anita'
import { SNICKERING } from '../../../../../app/constants/scene/actors/esther'
import { FLUSTERED } from '../../../../../app/constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [FLUSTERED]: {
            yIndex: 4,
            xPosition: 9.6,
            zOffset: -1.02
        }
    },
    [ANITA]: {
        [CONCERNED]: {
            yIndex: 4,
            xPosition: 2.5
        }
    },
    [ESTHER]: {
        [SNICKERING]: {
            yIndex: 4,
            xPosition: 4.7
        }
    }
}
