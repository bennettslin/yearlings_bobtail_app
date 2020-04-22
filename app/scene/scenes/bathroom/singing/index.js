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
            xPosition: 5.7
        }
    },
    [ANITA]: {
        [CHEERING]: {
            yIndex: 4,
            xPosition: 4.2,
            zOffset: -0.1,
            layerYIndex: 5
        }
    }
}
