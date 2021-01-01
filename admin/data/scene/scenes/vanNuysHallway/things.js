import {
    CARDBOARD,
    DOOR,
    PANEL,
} from '../../../../../app/constants/scene/things'
import { CORKBOARD } from '../../../../../app/constants/scene/things/cardboards'
import { PRINCIPAL_DOOR } from '../../../../../app/constants/scene/things/doors'
import { PRINCIPAL_BENCH } from '../../../../../app/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [CORKBOARD]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: 1.5,
            scaleFactor: 0.35,
        },
    },
    [DOOR]: {
        [PRINCIPAL_DOOR]: {
            yIndex: 4,
            xPosition: 3,
        },
    },
    [PANEL]: {
        [PRINCIPAL_BENCH]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: -1.58,
        },
    },
}
