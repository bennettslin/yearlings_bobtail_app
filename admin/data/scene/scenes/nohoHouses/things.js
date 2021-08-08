import {
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { FIRE_HYDRANT } from '../../../../../src/constants/scene/things/cutouts'
import {
    NEAR_HOUSES,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
} from '../../../../../src/constants/scene/things/flats'
export default {
    [CUTOUT]: {
        [FIRE_HYDRANT]: {
            yIndex: 5,
            xPosition: 1,
        },
    },
    [FLAT]: {
        [NEAR_HOUSES]: {},
        [NOHO_HOUSE_LEFT]: {
            yIndex: 1,
            xPosition: 2.5,
        },
        [NOHO_HOUSE_RIGHT]: {
            yIndex: 1,
            xPosition: 8.5,
        },
    },
}
