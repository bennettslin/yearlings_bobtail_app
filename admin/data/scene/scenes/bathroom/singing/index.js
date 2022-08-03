import {
    YOUNG_BENNETT,
    ANITA,
} from '../../../../../../src/constants/scene/actors'
import { CHEERING } from '../../../../../../src/constants/scene/actors/anita'
import { SINGING } from '../../../../../../src/constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [SINGING]: {
            yIndex: 2,
            xPosition: 5.45,
        },
    },
    [ANITA]: {
        [CHEERING]: {
            yIndex: 3,
            xPosition: 4.05,
            zOffset: -0.1,
            layerYIndex: 4,
        },
    },
}
