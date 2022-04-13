import {
    CARDBOARD,
    DOOR,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    ALBUM_NAS,
    POSTER_ELLIOTT_SMITH,
} from '../../../../../src/constants/scene/things/cardboards'
import { BASEMENT_DOOR_SIDE } from '../../../../../src/constants/scene/things/doors'
import { HEINEKEN__SITA } from '../../../../../src/constants/scene/things/fixtures'

export default {
    [CARDBOARD]: {
        [ALBUM_NAS]: {
            yIndex: 2,
            xPosition: 8,
            perspective: 50,
            rotateX: 10,
            skewX: 4,
        },
        [POSTER_ELLIOTT_SMITH]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 1.5,
        },
    },
    [DOOR]: {
        [BASEMENT_DOOR_SIDE]: {
            yIndex: 5,
            xPosition: 10.14,
            zOffset: 1.56,
        },
    },
    [FIXTURE]: {
        [HEINEKEN__SITA]: {
            yIndex: 4,
            xPosition: 4.25,
        },
    },
}
