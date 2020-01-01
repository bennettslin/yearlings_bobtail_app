import {
    CARDBOARD,
    DOOR
} from '../../../constants/scene/things'
import {
    NAS_ALBUM,
    ELLIOTT_SMITH_POSTER
} from '../../../constants/scene/things/cardboards'
import { BASEMENT_DOOR_SIDE } from '../../../constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [NAS_ALBUM]: {
            yIndex: 3,
            xPosition: 9.5,
            scaleFactor: 0.15
        },
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 2,
            scaleFactor: 0.25
        }
    },
    [DOOR]: {
        [BASEMENT_DOOR_SIDE]: {
            yIndex: 4,
            xPosition: 10.16,
            zOffset: 1,
            scaleFactor: 0.6
        }
    }
}
