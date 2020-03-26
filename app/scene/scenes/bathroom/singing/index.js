import {
    YOUNG_BENNETT,
    ANITA
} from '../../../../constants/scene/actors'
import { CHEERING } from '../../../../constants/scene/actors/anita'
import { SINGING } from '../../../../constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [SINGING]: {
            yIndex: 3,
            xPosition: 6,
            zOffset: 0.25
        }
    },
    [ANITA]: {
        [CHEERING]: {
            yIndex: 5,
            xPosition: 4.5
        }
    }
}
