import {
    CARDBOARD,
    DOOR,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { CORKBOARD__SCHOOL } from '../../../../../src/constants/scene/things/cardboards'
import { PRINCIPAL_DOOR } from '../../../../../src/constants/scene/things/doors'
import { PRINCIPAL_BENCH } from '../../../../../src/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [CORKBOARD__SCHOOL]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: 1.5,
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
