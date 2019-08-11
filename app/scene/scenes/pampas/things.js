import {
    BACKDROP,
    FLAT
} from '../../../constants/scene'
import { MOUNTAIN_BACKDROP } from '../../../constants/scene/things/backdrops'
import { PAMPAS_FAR } from '../../../constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [MOUNTAIN_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.66
        }
    },
    [FLAT]: {
        [PAMPAS_FAR]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.6
        }
    }
}

export default ARRANGEMENTS_THINGS
