import {
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
} from '../../../../../src/constants/scene/things/flats'
import { VOLKSWAGEN } from '../../../../../src/constants/scene/things/panels'

export default {
    [FLAT]: {
        [OAKLAND_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2.25,
        },
        [OAKLAND_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 9,
        },
    },
    [PANEL]: {
        [VOLKSWAGEN]: {
            yIndex: 3,
            xPosition: 7.5,
        },
    },
}
