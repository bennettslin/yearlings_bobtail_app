import {
    YOUNG_BENNETT,
    ANITA,
} from '../../../../../../src/constants/scene/actors'
import { CHEERING } from '../../../../../../src/constants/scene/actors/anita'
import { SINGING } from '../../../../../../src/constants/scene/actors/youngBennett'

export default {
    [YOUNG_BENNETT]: {
        [SINGING]: {
            yIndex: 3,
            xPosition: 5.7,
        },
    },
    [ANITA]: {
        [CHEERING]: {
            yIndex: 4,
            xPosition: 4.3,
            zOffset: -0.1,
            layerYIndex: 5,
        },
    },
}
